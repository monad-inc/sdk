# SecretProcessesorInputConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Secrets** | Pointer to [**SecretProcessesorInputConfigSecrets**](SecretProcessesorInputConfigSecrets.md) |  | [optional] 
**Settings** | Pointer to [**SecretProcessesorInputConfigSettings**](SecretProcessesorInputConfigSettings.md) |  | [optional] 

## Methods

### NewSecretProcessesorInputConfig

`func NewSecretProcessesorInputConfig() *SecretProcessesorInputConfig`

NewSecretProcessesorInputConfig instantiates a new SecretProcessesorInputConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSecretProcessesorInputConfigWithDefaults

`func NewSecretProcessesorInputConfigWithDefaults() *SecretProcessesorInputConfig`

NewSecretProcessesorInputConfigWithDefaults instantiates a new SecretProcessesorInputConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSecrets

`func (o *SecretProcessesorInputConfig) GetSecrets() SecretProcessesorInputConfigSecrets`

GetSecrets returns the Secrets field if non-nil, zero value otherwise.

### GetSecretsOk

`func (o *SecretProcessesorInputConfig) GetSecretsOk() (*SecretProcessesorInputConfigSecrets, bool)`

GetSecretsOk returns a tuple with the Secrets field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSecrets

`func (o *SecretProcessesorInputConfig) SetSecrets(v SecretProcessesorInputConfigSecrets)`

SetSecrets sets Secrets field to given value.

### HasSecrets

`func (o *SecretProcessesorInputConfig) HasSecrets() bool`

HasSecrets returns a boolean if a field has been set.

### GetSettings

`func (o *SecretProcessesorInputConfig) GetSettings() SecretProcessesorInputConfigSettings`

GetSettings returns the Settings field if non-nil, zero value otherwise.

### GetSettingsOk

`func (o *SecretProcessesorInputConfig) GetSettingsOk() (*SecretProcessesorInputConfigSettings, bool)`

GetSettingsOk returns a tuple with the Settings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSettings

`func (o *SecretProcessesorInputConfig) SetSettings(v SecretProcessesorInputConfigSettings)`

SetSettings sets Settings field to given value.

### HasSettings

`func (o *SecretProcessesorInputConfig) HasSettings() bool`

HasSettings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


