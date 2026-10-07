# MonadLogSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**LogType** | Pointer to **string** |  | [optional] 
**UseSyntheticData** | Pointer to **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 

## Methods

### NewMonadLogSettingsConfig

`func NewMonadLogSettingsConfig() *MonadLogSettingsConfig`

NewMonadLogSettingsConfig instantiates a new MonadLogSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMonadLogSettingsConfigWithDefaults

`func NewMonadLogSettingsConfigWithDefaults() *MonadLogSettingsConfig`

NewMonadLogSettingsConfigWithDefaults instantiates a new MonadLogSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLogType

`func (o *MonadLogSettingsConfig) GetLogType() string`

GetLogType returns the LogType field if non-nil, zero value otherwise.

### GetLogTypeOk

`func (o *MonadLogSettingsConfig) GetLogTypeOk() (*string, bool)`

GetLogTypeOk returns a tuple with the LogType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLogType

`func (o *MonadLogSettingsConfig) SetLogType(v string)`

SetLogType sets LogType field to given value.

### HasLogType

`func (o *MonadLogSettingsConfig) HasLogType() bool`

HasLogType returns a boolean if a field has been set.

### GetUseSyntheticData

`func (o *MonadLogSettingsConfig) GetUseSyntheticData() bool`

GetUseSyntheticData returns the UseSyntheticData field if non-nil, zero value otherwise.

### GetUseSyntheticDataOk

`func (o *MonadLogSettingsConfig) GetUseSyntheticDataOk() (*bool, bool)`

GetUseSyntheticDataOk returns a tuple with the UseSyntheticData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUseSyntheticData

`func (o *MonadLogSettingsConfig) SetUseSyntheticData(v bool)`

SetUseSyntheticData sets UseSyntheticData field to given value.

### HasUseSyntheticData

`func (o *MonadLogSettingsConfig) HasUseSyntheticData() bool`

HasUseSyntheticData returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


