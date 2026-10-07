# CoralogixCommunicationConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Rest** | Pointer to [**CoralogixRESTVariant**](CoralogixRESTVariant.md) |  | [optional] 
**Type** | **string** |  | 

## Methods

### NewCoralogixCommunicationConfig

`func NewCoralogixCommunicationConfig(type_ string, ) *CoralogixCommunicationConfig`

NewCoralogixCommunicationConfig instantiates a new CoralogixCommunicationConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCoralogixCommunicationConfigWithDefaults

`func NewCoralogixCommunicationConfigWithDefaults() *CoralogixCommunicationConfig`

NewCoralogixCommunicationConfigWithDefaults instantiates a new CoralogixCommunicationConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRest

`func (o *CoralogixCommunicationConfig) GetRest() CoralogixRESTVariant`

GetRest returns the Rest field if non-nil, zero value otherwise.

### GetRestOk

`func (o *CoralogixCommunicationConfig) GetRestOk() (*CoralogixRESTVariant, bool)`

GetRestOk returns a tuple with the Rest field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRest

`func (o *CoralogixCommunicationConfig) SetRest(v CoralogixRESTVariant)`

SetRest sets Rest field to given value.

### HasRest

`func (o *CoralogixCommunicationConfig) HasRest() bool`

HasRest returns a boolean if a field has been set.

### GetType

`func (o *CoralogixCommunicationConfig) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *CoralogixCommunicationConfig) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *CoralogixCommunicationConfig) SetType(v string)`

SetType sets Type field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


