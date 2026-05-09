<#
.SYNOPSIS
    Doc comment: Example PowerShell script.
.PARAMETER Message
    The message to display.
#>
$Global:MaxCount = 100
$prefix = "PS"

function Write-ExampleMessage {
    param(
        [Parameter(Mandatory=$true)]
        [ValidateNotNullOrEmpty()]
        [string]$Message, # Parameter
        
        [int]$Version = 1
    )
    
    process {
        # Simple comment
        Write-Host "${prefix}_${Message} (v$Version)" -ForegroundColor Cyan
        
        $files = Get-ChildItem -Path . | Where-Object { $_.Extension -eq ".txt" }
        foreach ($file in $files) {
            Write-Output "Processing $($file.Name)..."
        }
    }
}

try {
    Write-ExampleMessage -Message "Hello" -Version 2
} catch {
    Write-Error $_.Exception.Message
} finally {
    # Cleanup
}
