

# CriblHttpSettingsConfig

Cribl HTTP Output Settings

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**ingressAddress** | **String** | Your group&#39;s ingress address found in your group information panel. This is the hostname where your Cribl instance is accessible. |  [optional] |
|**path** | **String** | The path you&#39;ve set for your HTTP Source&#39;s HTTP Event API. This is the endpoint path where data will be sent. Note: You do not need to append &#x60;_bulk&#x60; to this path as monad already does this for you. |  [optional] |
|**port** | **Integer** | The port you&#39;ve set your HTTP Source to listen on. This should be the port number where your Cribl HTTP Source is configured to receive data. |  [optional] |



