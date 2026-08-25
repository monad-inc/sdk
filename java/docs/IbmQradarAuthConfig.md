

# IbmQradarAuthConfig

Optional authentication for the HTTP Receiver. Leave unset for an unauthenticated log source.

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**basic** | [**IbmQradarBasicAuthVariant**](IbmQradarBasicAuthVariant.md) |  |  [optional] |
|**header** | [**IbmQradarHeaderAuthVariant**](IbmQradarHeaderAuthVariant.md) |  |  [optional] |
|**type** | [**TypeEnum**](#TypeEnum) |  |  |



## Enum: TypeEnum

| Name | Value |
|---- | -----|
| BASIC | &quot;basic&quot; |
| HEADER | &quot;header&quot; |



