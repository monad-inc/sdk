# SentinelSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Endpoint** | Pointer to **string** | The Azure Monitor Data Collection Rule (DCR) ingestion endpoint URL. | [optional] 
**RuleId** | Pointer to **string** | The unique identifier of the Data Collection Rule (DCR). | [optional] 
**StreamName** | Pointer to **string** | The name of the data stream defined in the Data Collection Rule. | [optional] 

## Methods

### NewSentinelSettingsConfig

`func NewSentinelSettingsConfig() *SentinelSettingsConfig`

NewSentinelSettingsConfig instantiates a new SentinelSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSentinelSettingsConfigWithDefaults

`func NewSentinelSettingsConfigWithDefaults() *SentinelSettingsConfig`

NewSentinelSettingsConfigWithDefaults instantiates a new SentinelSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEndpoint

`func (o *SentinelSettingsConfig) GetEndpoint() string`

GetEndpoint returns the Endpoint field if non-nil, zero value otherwise.

### GetEndpointOk

`func (o *SentinelSettingsConfig) GetEndpointOk() (*string, bool)`

GetEndpointOk returns a tuple with the Endpoint field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndpoint

`func (o *SentinelSettingsConfig) SetEndpoint(v string)`

SetEndpoint sets Endpoint field to given value.

### HasEndpoint

`func (o *SentinelSettingsConfig) HasEndpoint() bool`

HasEndpoint returns a boolean if a field has been set.

### GetRuleId

`func (o *SentinelSettingsConfig) GetRuleId() string`

GetRuleId returns the RuleId field if non-nil, zero value otherwise.

### GetRuleIdOk

`func (o *SentinelSettingsConfig) GetRuleIdOk() (*string, bool)`

GetRuleIdOk returns a tuple with the RuleId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRuleId

`func (o *SentinelSettingsConfig) SetRuleId(v string)`

SetRuleId sets RuleId field to given value.

### HasRuleId

`func (o *SentinelSettingsConfig) HasRuleId() bool`

HasRuleId returns a boolean if a field has been set.

### GetStreamName

`func (o *SentinelSettingsConfig) GetStreamName() string`

GetStreamName returns the StreamName field if non-nil, zero value otherwise.

### GetStreamNameOk

`func (o *SentinelSettingsConfig) GetStreamNameOk() (*string, bool)`

GetStreamNameOk returns a tuple with the StreamName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStreamName

`func (o *SentinelSettingsConfig) SetStreamName(v string)`

SetStreamName sets StreamName field to given value.

### HasStreamName

`func (o *SentinelSettingsConfig) HasStreamName() bool`

HasStreamName returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


