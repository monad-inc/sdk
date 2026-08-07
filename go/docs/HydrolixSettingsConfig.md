# HydrolixSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Auth** | [**HydrolixAuthConfig**](HydrolixAuthConfig.md) |  | 
**Host** | **string** | The hostname of the Hydrolix cluster (no scheme). Example: mycluster.hydrolix.live. | 
**Table** | **string** | The fully-qualified target table in the form &#x60;project.table&#x60;. Sent as the &#x60;X-Hdx-Table&#x60; header on &#x60;/ingest/event&#x60;. | 
**Token** | Pointer to [**ModelsSecret**](ModelsSecret.md) |  | [optional] 
**Transform** | Pointer to **string** | Optional transform schema Hydrolix should apply when handling payloads. Sent as the &#x60;X-Hdx-Transform&#x60; header. | [optional] 

## Methods

### NewHydrolixSettingsConfig

`func NewHydrolixSettingsConfig(auth HydrolixAuthConfig, host string, table string, ) *HydrolixSettingsConfig`

NewHydrolixSettingsConfig instantiates a new HydrolixSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHydrolixSettingsConfigWithDefaults

`func NewHydrolixSettingsConfigWithDefaults() *HydrolixSettingsConfig`

NewHydrolixSettingsConfigWithDefaults instantiates a new HydrolixSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAuth

`func (o *HydrolixSettingsConfig) GetAuth() HydrolixAuthConfig`

GetAuth returns the Auth field if non-nil, zero value otherwise.

### GetAuthOk

`func (o *HydrolixSettingsConfig) GetAuthOk() (*HydrolixAuthConfig, bool)`

GetAuthOk returns a tuple with the Auth field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuth

`func (o *HydrolixSettingsConfig) SetAuth(v HydrolixAuthConfig)`

SetAuth sets Auth field to given value.


### GetHost

`func (o *HydrolixSettingsConfig) GetHost() string`

GetHost returns the Host field if non-nil, zero value otherwise.

### GetHostOk

`func (o *HydrolixSettingsConfig) GetHostOk() (*string, bool)`

GetHostOk returns a tuple with the Host field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHost

`func (o *HydrolixSettingsConfig) SetHost(v string)`

SetHost sets Host field to given value.


### GetTable

`func (o *HydrolixSettingsConfig) GetTable() string`

GetTable returns the Table field if non-nil, zero value otherwise.

### GetTableOk

`func (o *HydrolixSettingsConfig) GetTableOk() (*string, bool)`

GetTableOk returns a tuple with the Table field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTable

`func (o *HydrolixSettingsConfig) SetTable(v string)`

SetTable sets Table field to given value.


### GetToken

`func (o *HydrolixSettingsConfig) GetToken() ModelsSecret`

GetToken returns the Token field if non-nil, zero value otherwise.

### GetTokenOk

`func (o *HydrolixSettingsConfig) GetTokenOk() (*ModelsSecret, bool)`

GetTokenOk returns a tuple with the Token field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetToken

`func (o *HydrolixSettingsConfig) SetToken(v ModelsSecret)`

SetToken sets Token field to given value.

### HasToken

`func (o *HydrolixSettingsConfig) HasToken() bool`

HasToken returns a boolean if a field has been set.

### GetTransform

`func (o *HydrolixSettingsConfig) GetTransform() string`

GetTransform returns the Transform field if non-nil, zero value otherwise.

### GetTransformOk

`func (o *HydrolixSettingsConfig) GetTransformOk() (*string, bool)`

GetTransformOk returns a tuple with the Transform field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransform

`func (o *HydrolixSettingsConfig) SetTransform(v string)`

SetTransform sets Transform field to given value.

### HasTransform

`func (o *HydrolixSettingsConfig) HasTransform() bool`

HasTransform returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


