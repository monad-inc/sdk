# DemoSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Rate** | Pointer to **int32** | The rate at which to generate records (between 1 and 1000) per second | [optional] 
**RecordType** | Pointer to **string** | The type of record to generate | [optional] 

## Methods

### NewDemoSettingsConfig

`func NewDemoSettingsConfig() *DemoSettingsConfig`

NewDemoSettingsConfig instantiates a new DemoSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDemoSettingsConfigWithDefaults

`func NewDemoSettingsConfigWithDefaults() *DemoSettingsConfig`

NewDemoSettingsConfigWithDefaults instantiates a new DemoSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRate

`func (o *DemoSettingsConfig) GetRate() int32`

GetRate returns the Rate field if non-nil, zero value otherwise.

### GetRateOk

`func (o *DemoSettingsConfig) GetRateOk() (*int32, bool)`

GetRateOk returns a tuple with the Rate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRate

`func (o *DemoSettingsConfig) SetRate(v int32)`

SetRate sets Rate field to given value.

### HasRate

`func (o *DemoSettingsConfig) HasRate() bool`

HasRate returns a boolean if a field has been set.

### GetRecordType

`func (o *DemoSettingsConfig) GetRecordType() string`

GetRecordType returns the RecordType field if non-nil, zero value otherwise.

### GetRecordTypeOk

`func (o *DemoSettingsConfig) GetRecordTypeOk() (*string, bool)`

GetRecordTypeOk returns a tuple with the RecordType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecordType

`func (o *DemoSettingsConfig) SetRecordType(v string)`

SetRecordType sets RecordType field to given value.

### HasRecordType

`func (o *DemoSettingsConfig) HasRecordType() bool`

HasRecordType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


