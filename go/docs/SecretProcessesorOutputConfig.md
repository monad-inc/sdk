# SecretProcessesorOutputConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Secrets** | Pointer to [**SecretProcessesorOutputConfigSecrets**](SecretProcessesorOutputConfigSecrets.md) |  | [optional] 
**Settings** | Pointer to [**SecretProcessesorOutputConfigSettings**](SecretProcessesorOutputConfigSettings.md) |  | [optional] 

## Methods

### NewSecretProcessesorOutputConfig

`func NewSecretProcessesorOutputConfig() *SecretProcessesorOutputConfig`

NewSecretProcessesorOutputConfig instantiates a new SecretProcessesorOutputConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSecretProcessesorOutputConfigWithDefaults

`func NewSecretProcessesorOutputConfigWithDefaults() *SecretProcessesorOutputConfig`

NewSecretProcessesorOutputConfigWithDefaults instantiates a new SecretProcessesorOutputConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSecrets

`func (o *SecretProcessesorOutputConfig) GetSecrets() SecretProcessesorOutputConfigSecrets`

GetSecrets returns the Secrets field if non-nil, zero value otherwise.

### GetSecretsOk

`func (o *SecretProcessesorOutputConfig) GetSecretsOk() (*SecretProcessesorOutputConfigSecrets, bool)`

GetSecretsOk returns a tuple with the Secrets field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSecrets

`func (o *SecretProcessesorOutputConfig) SetSecrets(v SecretProcessesorOutputConfigSecrets)`

SetSecrets sets Secrets field to given value.

### HasSecrets

`func (o *SecretProcessesorOutputConfig) HasSecrets() bool`

HasSecrets returns a boolean if a field has been set.

### GetSettings

`func (o *SecretProcessesorOutputConfig) GetSettings() SecretProcessesorOutputConfigSettings`

GetSettings returns the Settings field if non-nil, zero value otherwise.

### GetSettingsOk

`func (o *SecretProcessesorOutputConfig) GetSettingsOk() (*SecretProcessesorOutputConfigSettings, bool)`

GetSettingsOk returns a tuple with the Settings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSettings

`func (o *SecretProcessesorOutputConfig) SetSettings(v SecretProcessesorOutputConfigSettings)`

SetSettings sets Settings field to given value.

### HasSettings

`func (o *SecretProcessesorOutputConfig) HasSettings() bool`

HasSettings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


