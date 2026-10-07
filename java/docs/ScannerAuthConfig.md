

# ScannerAuthConfig

Authentication used to write to the bucket (IAM role or static credentials).

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**iamRole** | [**ScannerIAMRoleVariant**](ScannerIAMRoleVariant.md) |  |  [optional] |
|**staticCredentials** | [**ScannerStaticCredentialsVariant**](ScannerStaticCredentialsVariant.md) |  |  [optional] |
|**type** | [**TypeEnum**](#TypeEnum) | Authentication type: iam_role or static_credentials. |  |



## Enum: TypeEnum

| Name | Value |
|---- | -----|
| IAM_ROLE | &quot;iam_role&quot; |
| STATIC_CREDENTIALS | &quot;static_credentials&quot; |



