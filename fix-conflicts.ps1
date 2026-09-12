# fix-conflicts.ps1
# Strips Git conflict markers, keeping the "ours" (HEAD/top) content.

$extensions = @("*.jsx", "*.js", "*.ts", "*.tsx", "*.css", "*.json", "*.svg", "*.html", "*.md")
$fixedCount = 0

Get-ChildItem -Recurse -File -Include $extensions |
    Where-Object { $_.FullName -notmatch "\\node_modules\\" -and $_.FullName -notmatch "\\dist\\" -and $_.FullName -notmatch "\\.git\\" } |
    ForEach-Object {
        $file = $_.FullName
        $content = Get-Content $file -Raw

        if ($content -match "<<<<<<<") {
            # Regex: match a full conflict block, keep only "ours" (top part).
            $pattern = '(?s)<<<<<<< [^\r\n]*\r?\n(.*?)\r?\n?=======\r?\n.*?\r?\n?>>>>>>> [^\r\n]*\r?\n?'
            $newContent = [regex]::Replace($content, $pattern, '$1' + "`r`n")

            # Also handle the "diff3" style where there's a base section:
            # <<<<<<< HEAD
            # ... ours
            # ||||||| base
            # ... base
            # =======
            # ... theirs
            # >>>>>>> branch
            $patternDiff3 = '(?s)<<<<<<< [^\r\n]*\r?\n(.*?)\r?\n?\|\|\|\|\|\|\| [^\r\n]*\r?\n.*?\r?\n?=======\r?\n.*?\r?\n?>>>>>>> [^\r\n]*\r?\n?'
            $newContent = [regex]::Replace($newContent, $patternDiff3, '$1' + "`r`n")

            Set-Content -Path $file -Value $newContent -NoNewline
            Write-Host "✓ Fixed: $file"
            $fixedCount++
        }
    }

Write-Host ""
Write-Host "Done. $fixedCount file(s) cleaned."