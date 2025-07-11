

# ModelsSecretWithComponents


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**createdAt** | **String** | When the secret was created |  [optional] |
|**description** | **String** | The user set Description of the secret |  [optional] |
|**id** | **String** | The ID of the secret |  [optional] |
|**inputs** | [**List&lt;ModelsComponentReference&gt;**](ModelsComponentReference.md) |  |  [optional] |
|**name** | **String** | The user set Name of the secret |  [optional] |
|**organizationId** | **String** | The OrganizationID the secret belongs to |  [optional] |
|**outputs** | [**List&lt;ModelsComponentReference&gt;**](ModelsComponentReference.md) |  |  [optional] |
|**updatedAt** | **String** | When the secret was updated |  [optional] |
|**value** | **String** | The value of the secret. This will never be returned to the client but can be used to set new values when used in a request payload. |  [optional] |



