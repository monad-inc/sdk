

# OpensearchSettingsConfig

OpenSearch Output Settings

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**authMode** | **OpensearchAuthMode** |  |  [optional] |
|**index** | **String** | The name of the OpenSearch index to use. |  [optional] |
|**insecureSkipVerify** | **Boolean** | Whether to skip TLS certificate verification (not recommended for production). |  [optional] |
|**region** | **String** | The AWS Region where the OpenSearch domain is located |  [optional] |
|**roleArn** | **String** | The AWS IAM Role ARN to assume (used for aws_role auth) |  [optional] |
|**url** | **String** | The URL of the OpenSearch instance (must start with https). |  [optional] |
|**username** | **String** | The username for authenticating with OpenSearch (used for basic auth). |  [optional] |



