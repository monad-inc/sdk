# CoralogixSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApplicationName** | **string** | ApplicationName is stamped on every record. Coralogix uses this to separate environments/tenants. | 
**BatchConfig** | Pointer to [**BatchConfigBatchConfig**](BatchConfigBatchConfig.md) |  | [optional] 
**Communication** | Pointer to [**CoralogixCommunicationConfig**](CoralogixCommunicationConfig.md) |  | [optional] 
**Region** | **string** | Coralogix region (e.g. us1, eu2). Determines which regional ingress hostname is used. See https://coralogix.com/docs/integrations/coralogix-endpoints/. | 
**SubsystemName** | **string** | SubsystemName is stamped on every record. Coralogix uses this to separate components within an application. | 
**TimestampRecordLocation** | Pointer to **string** | TimestampRecordLocation is an optional JSONPath (&#x60;$.event.time&#x60;) or gjson path pointing at the timestamp field inside each incoming record. When unset the connector stamps the current time on every record; when set the connector reads the field and fails the batch if the value is not a parseable timestamp. | [optional] 

## Methods

### NewCoralogixSettingsConfig

`func NewCoralogixSettingsConfig(applicationName string, region string, subsystemName string, ) *CoralogixSettingsConfig`

NewCoralogixSettingsConfig instantiates a new CoralogixSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCoralogixSettingsConfigWithDefaults

`func NewCoralogixSettingsConfigWithDefaults() *CoralogixSettingsConfig`

NewCoralogixSettingsConfigWithDefaults instantiates a new CoralogixSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetApplicationName

`func (o *CoralogixSettingsConfig) GetApplicationName() string`

GetApplicationName returns the ApplicationName field if non-nil, zero value otherwise.

### GetApplicationNameOk

`func (o *CoralogixSettingsConfig) GetApplicationNameOk() (*string, bool)`

GetApplicationNameOk returns a tuple with the ApplicationName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApplicationName

`func (o *CoralogixSettingsConfig) SetApplicationName(v string)`

SetApplicationName sets ApplicationName field to given value.


### GetBatchConfig

`func (o *CoralogixSettingsConfig) GetBatchConfig() BatchConfigBatchConfig`

GetBatchConfig returns the BatchConfig field if non-nil, zero value otherwise.

### GetBatchConfigOk

`func (o *CoralogixSettingsConfig) GetBatchConfigOk() (*BatchConfigBatchConfig, bool)`

GetBatchConfigOk returns a tuple with the BatchConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBatchConfig

`func (o *CoralogixSettingsConfig) SetBatchConfig(v BatchConfigBatchConfig)`

SetBatchConfig sets BatchConfig field to given value.

### HasBatchConfig

`func (o *CoralogixSettingsConfig) HasBatchConfig() bool`

HasBatchConfig returns a boolean if a field has been set.

### GetCommunication

`func (o *CoralogixSettingsConfig) GetCommunication() CoralogixCommunicationConfig`

GetCommunication returns the Communication field if non-nil, zero value otherwise.

### GetCommunicationOk

`func (o *CoralogixSettingsConfig) GetCommunicationOk() (*CoralogixCommunicationConfig, bool)`

GetCommunicationOk returns a tuple with the Communication field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommunication

`func (o *CoralogixSettingsConfig) SetCommunication(v CoralogixCommunicationConfig)`

SetCommunication sets Communication field to given value.

### HasCommunication

`func (o *CoralogixSettingsConfig) HasCommunication() bool`

HasCommunication returns a boolean if a field has been set.

### GetRegion

`func (o *CoralogixSettingsConfig) GetRegion() string`

GetRegion returns the Region field if non-nil, zero value otherwise.

### GetRegionOk

`func (o *CoralogixSettingsConfig) GetRegionOk() (*string, bool)`

GetRegionOk returns a tuple with the Region field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRegion

`func (o *CoralogixSettingsConfig) SetRegion(v string)`

SetRegion sets Region field to given value.


### GetSubsystemName

`func (o *CoralogixSettingsConfig) GetSubsystemName() string`

GetSubsystemName returns the SubsystemName field if non-nil, zero value otherwise.

### GetSubsystemNameOk

`func (o *CoralogixSettingsConfig) GetSubsystemNameOk() (*string, bool)`

GetSubsystemNameOk returns a tuple with the SubsystemName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubsystemName

`func (o *CoralogixSettingsConfig) SetSubsystemName(v string)`

SetSubsystemName sets SubsystemName field to given value.


### GetTimestampRecordLocation

`func (o *CoralogixSettingsConfig) GetTimestampRecordLocation() string`

GetTimestampRecordLocation returns the TimestampRecordLocation field if non-nil, zero value otherwise.

### GetTimestampRecordLocationOk

`func (o *CoralogixSettingsConfig) GetTimestampRecordLocationOk() (*string, bool)`

GetTimestampRecordLocationOk returns a tuple with the TimestampRecordLocation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimestampRecordLocation

`func (o *CoralogixSettingsConfig) SetTimestampRecordLocation(v string)`

SetTimestampRecordLocation sets TimestampRecordLocation field to given value.

### HasTimestampRecordLocation

`func (o *CoralogixSettingsConfig) HasTimestampRecordLocation() bool`

HasTimestampRecordLocation returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


