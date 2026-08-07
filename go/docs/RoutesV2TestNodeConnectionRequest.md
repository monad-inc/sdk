# RoutesV2TestNodeConnectionRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ComponentType** | Pointer to [**ModelsComponentType**](ModelsComponentType.md) |  | [optional] 
**Config** | Pointer to [**RoutesV2TestNodeConfig**](RoutesV2TestNodeConfig.md) |  | [optional] 
**Type** | Pointer to **string** | connector subtype (e.g. \&quot;s3\&quot;) | [optional] 
**Version** | Pointer to **int32** |  | [optional] 

## Methods

### NewRoutesV2TestNodeConnectionRequest

`func NewRoutesV2TestNodeConnectionRequest() *RoutesV2TestNodeConnectionRequest`

NewRoutesV2TestNodeConnectionRequest instantiates a new RoutesV2TestNodeConnectionRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoutesV2TestNodeConnectionRequestWithDefaults

`func NewRoutesV2TestNodeConnectionRequestWithDefaults() *RoutesV2TestNodeConnectionRequest`

NewRoutesV2TestNodeConnectionRequestWithDefaults instantiates a new RoutesV2TestNodeConnectionRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetComponentType

`func (o *RoutesV2TestNodeConnectionRequest) GetComponentType() ModelsComponentType`

GetComponentType returns the ComponentType field if non-nil, zero value otherwise.

### GetComponentTypeOk

`func (o *RoutesV2TestNodeConnectionRequest) GetComponentTypeOk() (*ModelsComponentType, bool)`

GetComponentTypeOk returns a tuple with the ComponentType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComponentType

`func (o *RoutesV2TestNodeConnectionRequest) SetComponentType(v ModelsComponentType)`

SetComponentType sets ComponentType field to given value.

### HasComponentType

`func (o *RoutesV2TestNodeConnectionRequest) HasComponentType() bool`

HasComponentType returns a boolean if a field has been set.

### GetConfig

`func (o *RoutesV2TestNodeConnectionRequest) GetConfig() RoutesV2TestNodeConfig`

GetConfig returns the Config field if non-nil, zero value otherwise.

### GetConfigOk

`func (o *RoutesV2TestNodeConnectionRequest) GetConfigOk() (*RoutesV2TestNodeConfig, bool)`

GetConfigOk returns a tuple with the Config field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfig

`func (o *RoutesV2TestNodeConnectionRequest) SetConfig(v RoutesV2TestNodeConfig)`

SetConfig sets Config field to given value.

### HasConfig

`func (o *RoutesV2TestNodeConnectionRequest) HasConfig() bool`

HasConfig returns a boolean if a field has been set.

### GetType

`func (o *RoutesV2TestNodeConnectionRequest) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *RoutesV2TestNodeConnectionRequest) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *RoutesV2TestNodeConnectionRequest) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *RoutesV2TestNodeConnectionRequest) HasType() bool`

HasType returns a boolean if a field has been set.

### GetVersion

`func (o *RoutesV2TestNodeConnectionRequest) GetVersion() int32`

GetVersion returns the Version field if non-nil, zero value otherwise.

### GetVersionOk

`func (o *RoutesV2TestNodeConnectionRequest) GetVersionOk() (*int32, bool)`

GetVersionOk returns a tuple with the Version field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVersion

`func (o *RoutesV2TestNodeConnectionRequest) SetVersion(v int32)`

SetVersion sets Version field to given value.

### HasVersion

`func (o *RoutesV2TestNodeConnectionRequest) HasVersion() bool`

HasVersion returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


