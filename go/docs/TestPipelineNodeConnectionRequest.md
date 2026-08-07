# TestPipelineNodeConnectionRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ComponentType** | Pointer to [**ModelsComponentType**](ModelsComponentType.md) |  | [optional] 
**Config** | Pointer to [**RoutesV2TestNodeConfig**](RoutesV2TestNodeConfig.md) |  | [optional] 
**Type** | Pointer to **string** | connector subtype (e.g. \&quot;s3\&quot;) | [optional] 
**Version** | Pointer to **int32** |  | [optional] 

## Methods

### NewTestPipelineNodeConnectionRequest

`func NewTestPipelineNodeConnectionRequest() *TestPipelineNodeConnectionRequest`

NewTestPipelineNodeConnectionRequest instantiates a new TestPipelineNodeConnectionRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTestPipelineNodeConnectionRequestWithDefaults

`func NewTestPipelineNodeConnectionRequestWithDefaults() *TestPipelineNodeConnectionRequest`

NewTestPipelineNodeConnectionRequestWithDefaults instantiates a new TestPipelineNodeConnectionRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetComponentType

`func (o *TestPipelineNodeConnectionRequest) GetComponentType() ModelsComponentType`

GetComponentType returns the ComponentType field if non-nil, zero value otherwise.

### GetComponentTypeOk

`func (o *TestPipelineNodeConnectionRequest) GetComponentTypeOk() (*ModelsComponentType, bool)`

GetComponentTypeOk returns a tuple with the ComponentType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComponentType

`func (o *TestPipelineNodeConnectionRequest) SetComponentType(v ModelsComponentType)`

SetComponentType sets ComponentType field to given value.

### HasComponentType

`func (o *TestPipelineNodeConnectionRequest) HasComponentType() bool`

HasComponentType returns a boolean if a field has been set.

### GetConfig

`func (o *TestPipelineNodeConnectionRequest) GetConfig() RoutesV2TestNodeConfig`

GetConfig returns the Config field if non-nil, zero value otherwise.

### GetConfigOk

`func (o *TestPipelineNodeConnectionRequest) GetConfigOk() (*RoutesV2TestNodeConfig, bool)`

GetConfigOk returns a tuple with the Config field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfig

`func (o *TestPipelineNodeConnectionRequest) SetConfig(v RoutesV2TestNodeConfig)`

SetConfig sets Config field to given value.

### HasConfig

`func (o *TestPipelineNodeConnectionRequest) HasConfig() bool`

HasConfig returns a boolean if a field has been set.

### GetType

`func (o *TestPipelineNodeConnectionRequest) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *TestPipelineNodeConnectionRequest) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *TestPipelineNodeConnectionRequest) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *TestPipelineNodeConnectionRequest) HasType() bool`

HasType returns a boolean if a field has been set.

### GetVersion

`func (o *TestPipelineNodeConnectionRequest) GetVersion() int32`

GetVersion returns the Version field if non-nil, zero value otherwise.

### GetVersionOk

`func (o *TestPipelineNodeConnectionRequest) GetVersionOk() (*int32, bool)`

GetVersionOk returns a tuple with the Version field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVersion

`func (o *TestPipelineNodeConnectionRequest) SetVersion(v int32)`

SetVersion sets Version field to given value.

### HasVersion

`func (o *TestPipelineNodeConnectionRequest) HasVersion() bool`

HasVersion returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


