# 小说创作系统通知弹窗 - Windows Toast通知
# 用法: .\notify.ps1 "消息内容"

param(
    [Parameter(Mandatory=$true)]
    [string]$Message,
    
    [string]$Title = "小说创作系统",
    [int]$Duration = 5
)

# 加载必要的程序集
Add-Type -AssemblyName System.Windows.Forms

# 创建Windows Toast通知
[Windows.UI.Notifications.ToastNotificationManager, Windows.UI.Notifications, ContentType = WindowsRuntime] | Out-Null
[Windows.Data.Xml.Dom.XmlDocument, Windows.Data.Xml.Dom, ContentType = WindowsRuntime] | Out-Null

$template = @"
<toast>
    <visual>
        <binding template="ToastGeneric">
            <text>$Title</text>
            <text>$Message</text>
        </binding>
    </visual>
    <audio src="ms-winsoundevent:Notification.Default"/>
</toast>
"@

$xml = New-Object Windows.Data.Xml.Dom.XmlDocument
$xml.LoadXml($template)

$appId = '{1AC14E77-02E7-4E5D-B744-2EB1AE5198B7}\WindowsPowerShell\v1.0\powershell.exe'
$toast = [Windows.UI.Notifications.ToastNotificationManager]::CreateToastNotifier($appId)
$notification = New-Object Windows.UI.Notifications.ToastNotification($xml)
$toast.Show($notification)

# 等待后退出
Start-Sleep -Seconds $Duration
