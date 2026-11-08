Add-Type -AssemblyName System.Drawing

$sourcePath = Join-Path (Get-Location) "public\images\anita-portrait.jpg"
$sourceImg = [System.Drawing.Image]::FromFile($sourcePath)

Write-Host "Source Width: " $sourceImg.Width " Height: " $sourceImg.Height

# We know the total dimensions are 956 x 1343.
# Where is Anita located? Let's check:
# Top half: GMCKS (approx y: 150 to 750)
# Bottom half: Anita (approx y: 700 to 1343)
# Let's crop a square headshot of Anita centered around her face:
# Width: ~600, Height: ~600, centered horizontally (X ~ 178), Y ~ 720 to 1320.

$cropX = 140
$cropY = 660
$cropW = 670
$cropH = 680

$bmpCrop = New-Object System.Drawing.Bitmap($cropW, $cropH)
$gfx = [System.Drawing.Graphics]::FromImage($bmpCrop)
$gfx.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$gfx.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$gfx.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
$gfx.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality

$srcRect = New-Object System.Drawing.Rectangle($cropX, $cropY, $cropW, $cropH)
$dstRect = New-Object System.Drawing.Rectangle(0, 0, $cropW, $cropH)
$gfx.DrawImage($sourceImg, $dstRect, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)

$targetHeadshot = Join-Path (Get-Location) "public\images\anita-headshot.jpg"
$bmpCrop.Save($targetHeadshot, [System.Drawing.Imaging.ImageFormat]::Jpeg)

$gfx.Dispose()
$bmpCrop.Dispose()
$sourceImg.Dispose()

Write-Host "Headshot created successfully at $targetHeadshot"
