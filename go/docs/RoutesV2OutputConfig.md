# RoutesV2OutputConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Secrets** | Pointer to [**RoutesV2OutputConfigSecrets**](RoutesV2OutputConfigSecrets.md) |  | [optional] 
**Settings** | Pointer to [**RoutesV2OutputConfigSettings**](RoutesV2OutputConfigSettings.md) |  | [optional] 

## Methods

### NewRoutesV2OutputConfig

`func NewRoutesV2OutputConfig() *RoutesV2OutputConfig`

NewRoutesV2OutputConfig instantiates a new RoutesV2OutputConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoutesV2OutputConfigWithDefaults

`func NewRoutesV2OutputConfigWithDefaults() *RoutesV2OutputConfig`

NewRoutesV2OutputConfigWithDefaults instantiates a new RoutesV2OutputConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSecrets

`func (o *RoutesV2OutputConfig) GetSecrets() RoutesV2OutputConfigSecrets`

GetSecrets returns the Secrets field if non-nil, zero value otherwise.

### GetSecretsOk

`func (o *RoutesV2OutputConfig) GetSecretsOk() (*RoutesV2OutputConfigSecrets, bool)`

GetSecretsOk returns a tuple with the Secrets field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSecrets

`func (o *RoutesV2OutputConfig) SetSecrets(v RoutesV2OutputConfigSecrets)`

SetSecrets sets Secrets field to given value.

### HasSecrets

`func (o *RoutesV2OutputConfig) HasSecrets() bool`

HasSecrets returns a boolean if a field has been set.

### GetSettings

`func (o *RoutesV2OutputConfig) GetSettings() RoutesV2OutputConfigSettings`

GetSettings returns the Settings field if non-nil, zero value otherwise.

### GetSettingsOk

`func (o *RoutesV2OutputConfig) GetSettingsOk() (*RoutesV2OutputConfigSettings, bool)`

GetSettingsOk returns a tuple with the Settings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSettings

`func (o *RoutesV2OutputConfig) SetSettings(v RoutesV2OutputConfigSettings)`

SetSettings sets Settings field to given value.

### HasSettings

`func (o *RoutesV2OutputConfig) HasSettings() bool`

HasSettings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


