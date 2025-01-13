# RoutesV2TestOutputConnectionRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Config** | Pointer to [**RoutesV2OutputConfig**](RoutesV2OutputConfig.md) |  | [optional] 
**Type** | Pointer to **string** |  | [optional] 

## Methods

### NewRoutesV2TestOutputConnectionRequest

`func NewRoutesV2TestOutputConnectionRequest() *RoutesV2TestOutputConnectionRequest`

NewRoutesV2TestOutputConnectionRequest instantiates a new RoutesV2TestOutputConnectionRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoutesV2TestOutputConnectionRequestWithDefaults

`func NewRoutesV2TestOutputConnectionRequestWithDefaults() *RoutesV2TestOutputConnectionRequest`

NewRoutesV2TestOutputConnectionRequestWithDefaults instantiates a new RoutesV2TestOutputConnectionRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetConfig

`func (o *RoutesV2TestOutputConnectionRequest) GetConfig() RoutesV2OutputConfig`

GetConfig returns the Config field if non-nil, zero value otherwise.

### GetConfigOk

`func (o *RoutesV2TestOutputConnectionRequest) GetConfigOk() (*RoutesV2OutputConfig, bool)`

GetConfigOk returns a tuple with the Config field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfig

`func (o *RoutesV2TestOutputConnectionRequest) SetConfig(v RoutesV2OutputConfig)`

SetConfig sets Config field to given value.

### HasConfig

`func (o *RoutesV2TestOutputConnectionRequest) HasConfig() bool`

HasConfig returns a boolean if a field has been set.

### GetType

`func (o *RoutesV2TestOutputConnectionRequest) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *RoutesV2TestOutputConnectionRequest) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *RoutesV2TestOutputConnectionRequest) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *RoutesV2TestOutputConnectionRequest) HasType() bool`

HasType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


