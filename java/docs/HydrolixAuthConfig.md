

# HydrolixAuthConfig

Authentication method. Either a static service-account bearer token or a username/password pair exchanged at Init time for a 24h access token.

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**password** | [**HydrolixPasswordAuth**](HydrolixPasswordAuth.md) |  |  [optional] |
|**serviceAccount** | [**HydrolixServiceAccountAuth**](HydrolixServiceAccountAuth.md) |  |  [optional] |
|**type** | [**TypeEnum**](#TypeEnum) |  |  |



## Enum: TypeEnum

| Name | Value |
|---- | -----|
| SERVICE_ACCOUNT | &quot;service_account&quot; |
| PASSWORD | &quot;password&quot; |



