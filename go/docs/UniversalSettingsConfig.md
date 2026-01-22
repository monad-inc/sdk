# UniversalSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**InstanceName** | Pointer to **string** | Name of the ServiceNow instance | [optional] 
**Streams** | Pointer to **[]string** | ServiceNow streams to fetch data from | [optional] 
**UseSyntheticData** | Pointer to **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 

## Methods

### NewUniversalSettingsConfig

`func NewUniversalSettingsConfig() *UniversalSettingsConfig`

NewUniversalSettingsConfig instantiates a new UniversalSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUniversalSettingsConfigWithDefaults

`func NewUniversalSettingsConfigWithDefaults() *UniversalSettingsConfig`

NewUniversalSettingsConfigWithDefaults instantiates a new UniversalSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetInstanceName

`func (o *UniversalSettingsConfig) GetInstanceName() string`

GetInstanceName returns the InstanceName field if non-nil, zero value otherwise.

### GetInstanceNameOk

`func (o *UniversalSettingsConfig) GetInstanceNameOk() (*string, bool)`

GetInstanceNameOk returns a tuple with the InstanceName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInstanceName

`func (o *UniversalSettingsConfig) SetInstanceName(v string)`

SetInstanceName sets InstanceName field to given value.

### HasInstanceName

`func (o *UniversalSettingsConfig) HasInstanceName() bool`

HasInstanceName returns a boolean if a field has been set.

### GetStreams

`func (o *UniversalSettingsConfig) GetStreams() []string`

GetStreams returns the Streams field if non-nil, zero value otherwise.

### GetStreamsOk

`func (o *UniversalSettingsConfig) GetStreamsOk() (*[]string, bool)`

GetStreamsOk returns a tuple with the Streams field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStreams

`func (o *UniversalSettingsConfig) SetStreams(v []string)`

SetStreams sets Streams field to given value.

### HasStreams

`func (o *UniversalSettingsConfig) HasStreams() bool`

HasStreams returns a boolean if a field has been set.

### GetUseSyntheticData

`func (o *UniversalSettingsConfig) GetUseSyntheticData() bool`

GetUseSyntheticData returns the UseSyntheticData field if non-nil, zero value otherwise.

### GetUseSyntheticDataOk

`func (o *UniversalSettingsConfig) GetUseSyntheticDataOk() (*bool, bool)`

GetUseSyntheticDataOk returns a tuple with the UseSyntheticData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUseSyntheticData

`func (o *UniversalSettingsConfig) SetUseSyntheticData(v bool)`

SetUseSyntheticData sets UseSyntheticData field to given value.

### HasUseSyntheticData

`func (o *UniversalSettingsConfig) HasUseSyntheticData() bool`

HasUseSyntheticData returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


