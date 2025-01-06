# DeviceDetailsSecretsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ClientId** | Pointer to **string** | Client ID for the CrowdStrike API. This is required to authenticate requests. | [optional] 
**ClientSecret** | Pointer to **string** | Client Secret for the CrowdStrike API. This is required to authenticate requests. | [optional] 

## Methods

### NewDeviceDetailsSecretsConfig

`func NewDeviceDetailsSecretsConfig() *DeviceDetailsSecretsConfig`

NewDeviceDetailsSecretsConfig instantiates a new DeviceDetailsSecretsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDeviceDetailsSecretsConfigWithDefaults

`func NewDeviceDetailsSecretsConfigWithDefaults() *DeviceDetailsSecretsConfig`

NewDeviceDetailsSecretsConfigWithDefaults instantiates a new DeviceDetailsSecretsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetClientId

`func (o *DeviceDetailsSecretsConfig) GetClientId() string`

GetClientId returns the ClientId field if non-nil, zero value otherwise.

### GetClientIdOk

`func (o *DeviceDetailsSecretsConfig) GetClientIdOk() (*string, bool)`

GetClientIdOk returns a tuple with the ClientId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientId

`func (o *DeviceDetailsSecretsConfig) SetClientId(v string)`

SetClientId sets ClientId field to given value.

### HasClientId

`func (o *DeviceDetailsSecretsConfig) HasClientId() bool`

HasClientId returns a boolean if a field has been set.

### GetClientSecret

`func (o *DeviceDetailsSecretsConfig) GetClientSecret() string`

GetClientSecret returns the ClientSecret field if non-nil, zero value otherwise.

### GetClientSecretOk

`func (o *DeviceDetailsSecretsConfig) GetClientSecretOk() (*string, bool)`

GetClientSecretOk returns a tuple with the ClientSecret field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientSecret

`func (o *DeviceDetailsSecretsConfig) SetClientSecret(v string)`

SetClientSecret sets ClientSecret field to given value.

### HasClientSecret

`func (o *DeviceDetailsSecretsConfig) HasClientSecret() bool`

HasClientSecret returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


