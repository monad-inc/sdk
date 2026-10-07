# Sentinelv2SettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DcrConfig** | [**Sentinelv2DCRConfig**](Sentinelv2DCRConfig.md) |  | 
**Endpoint** | **string** | The Azure Monitor Data Collection Rule (DCR) ingestion endpoint URL. | 
**StreamName** | **string** | The name of the data stream defined in the Data Collection Rule. | 

## Methods

### NewSentinelv2SettingsConfig

`func NewSentinelv2SettingsConfig(dcrConfig Sentinelv2DCRConfig, endpoint string, streamName string, ) *Sentinelv2SettingsConfig`

NewSentinelv2SettingsConfig instantiates a new Sentinelv2SettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSentinelv2SettingsConfigWithDefaults

`func NewSentinelv2SettingsConfigWithDefaults() *Sentinelv2SettingsConfig`

NewSentinelv2SettingsConfigWithDefaults instantiates a new Sentinelv2SettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDcrConfig

`func (o *Sentinelv2SettingsConfig) GetDcrConfig() Sentinelv2DCRConfig`

GetDcrConfig returns the DcrConfig field if non-nil, zero value otherwise.

### GetDcrConfigOk

`func (o *Sentinelv2SettingsConfig) GetDcrConfigOk() (*Sentinelv2DCRConfig, bool)`

GetDcrConfigOk returns a tuple with the DcrConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDcrConfig

`func (o *Sentinelv2SettingsConfig) SetDcrConfig(v Sentinelv2DCRConfig)`

SetDcrConfig sets DcrConfig field to given value.


### GetEndpoint

`func (o *Sentinelv2SettingsConfig) GetEndpoint() string`

GetEndpoint returns the Endpoint field if non-nil, zero value otherwise.

### GetEndpointOk

`func (o *Sentinelv2SettingsConfig) GetEndpointOk() (*string, bool)`

GetEndpointOk returns a tuple with the Endpoint field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndpoint

`func (o *Sentinelv2SettingsConfig) SetEndpoint(v string)`

SetEndpoint sets Endpoint field to given value.


### GetStreamName

`func (o *Sentinelv2SettingsConfig) GetStreamName() string`

GetStreamName returns the StreamName field if non-nil, zero value otherwise.

### GetStreamNameOk

`func (o *Sentinelv2SettingsConfig) GetStreamNameOk() (*string, bool)`

GetStreamNameOk returns a tuple with the StreamName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStreamName

`func (o *Sentinelv2SettingsConfig) SetStreamName(v string)`

SetStreamName sets StreamName field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


