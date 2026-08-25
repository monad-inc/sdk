# IbmQradarSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Auth** | Pointer to [**IbmQradarAuthConfig**](IbmQradarAuthConfig.md) |  | [optional] 
**BatchConfig** | Pointer to [**BatchConfigBatchConfig**](BatchConfigBatchConfig.md) |  | [optional] 
**Communication** | Pointer to [**IbmQradarCommunicationConfig**](IbmQradarCommunicationConfig.md) |  | [optional] 
**EventFormat** | Pointer to [**IbmQradarEventFormatConfig**](IbmQradarEventFormatConfig.md) |  | [optional] 
**Host** | **string** | Hostname or IP of the QRadar HTTP Receiver log source. Do not include a scheme or a port here. | 
**Port** | **int32** | TCP port the HTTP Receiver log source listens on (configured on the QRadar log source). | 

## Methods

### NewIbmQradarSettingsConfig

`func NewIbmQradarSettingsConfig(host string, port int32, ) *IbmQradarSettingsConfig`

NewIbmQradarSettingsConfig instantiates a new IbmQradarSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIbmQradarSettingsConfigWithDefaults

`func NewIbmQradarSettingsConfigWithDefaults() *IbmQradarSettingsConfig`

NewIbmQradarSettingsConfigWithDefaults instantiates a new IbmQradarSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAuth

`func (o *IbmQradarSettingsConfig) GetAuth() IbmQradarAuthConfig`

GetAuth returns the Auth field if non-nil, zero value otherwise.

### GetAuthOk

`func (o *IbmQradarSettingsConfig) GetAuthOk() (*IbmQradarAuthConfig, bool)`

GetAuthOk returns a tuple with the Auth field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuth

`func (o *IbmQradarSettingsConfig) SetAuth(v IbmQradarAuthConfig)`

SetAuth sets Auth field to given value.

### HasAuth

`func (o *IbmQradarSettingsConfig) HasAuth() bool`

HasAuth returns a boolean if a field has been set.

### GetBatchConfig

`func (o *IbmQradarSettingsConfig) GetBatchConfig() BatchConfigBatchConfig`

GetBatchConfig returns the BatchConfig field if non-nil, zero value otherwise.

### GetBatchConfigOk

`func (o *IbmQradarSettingsConfig) GetBatchConfigOk() (*BatchConfigBatchConfig, bool)`

GetBatchConfigOk returns a tuple with the BatchConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBatchConfig

`func (o *IbmQradarSettingsConfig) SetBatchConfig(v BatchConfigBatchConfig)`

SetBatchConfig sets BatchConfig field to given value.

### HasBatchConfig

`func (o *IbmQradarSettingsConfig) HasBatchConfig() bool`

HasBatchConfig returns a boolean if a field has been set.

### GetCommunication

`func (o *IbmQradarSettingsConfig) GetCommunication() IbmQradarCommunicationConfig`

GetCommunication returns the Communication field if non-nil, zero value otherwise.

### GetCommunicationOk

`func (o *IbmQradarSettingsConfig) GetCommunicationOk() (*IbmQradarCommunicationConfig, bool)`

GetCommunicationOk returns a tuple with the Communication field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommunication

`func (o *IbmQradarSettingsConfig) SetCommunication(v IbmQradarCommunicationConfig)`

SetCommunication sets Communication field to given value.

### HasCommunication

`func (o *IbmQradarSettingsConfig) HasCommunication() bool`

HasCommunication returns a boolean if a field has been set.

### GetEventFormat

`func (o *IbmQradarSettingsConfig) GetEventFormat() IbmQradarEventFormatConfig`

GetEventFormat returns the EventFormat field if non-nil, zero value otherwise.

### GetEventFormatOk

`func (o *IbmQradarSettingsConfig) GetEventFormatOk() (*IbmQradarEventFormatConfig, bool)`

GetEventFormatOk returns a tuple with the EventFormat field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventFormat

`func (o *IbmQradarSettingsConfig) SetEventFormat(v IbmQradarEventFormatConfig)`

SetEventFormat sets EventFormat field to given value.

### HasEventFormat

`func (o *IbmQradarSettingsConfig) HasEventFormat() bool`

HasEventFormat returns a boolean if a field has been set.

### GetHost

`func (o *IbmQradarSettingsConfig) GetHost() string`

GetHost returns the Host field if non-nil, zero value otherwise.

### GetHostOk

`func (o *IbmQradarSettingsConfig) GetHostOk() (*string, bool)`

GetHostOk returns a tuple with the Host field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHost

`func (o *IbmQradarSettingsConfig) SetHost(v string)`

SetHost sets Host field to given value.


### GetPort

`func (o *IbmQradarSettingsConfig) GetPort() int32`

GetPort returns the Port field if non-nil, zero value otherwise.

### GetPortOk

`func (o *IbmQradarSettingsConfig) GetPortOk() (*int32, bool)`

GetPortOk returns a tuple with the Port field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPort

`func (o *IbmQradarSettingsConfig) SetPort(v int32)`

SetPort sets Port field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


