# CreatePipelineRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Description** | Pointer to **string** |  | [optional] 
**Edges** | [**[]RoutesV2PipelineRequestEdge**](RoutesV2PipelineRequestEdge.md) |  | 
**Enabled** | **bool** |  | 
**Name** | **string** |  | 
**Nodes** | [**[]RoutesV2PipelineRequestNode**](RoutesV2PipelineRequestNode.md) |  | 

## Methods

### NewCreatePipelineRequest

`func NewCreatePipelineRequest(edges []RoutesV2PipelineRequestEdge, enabled bool, name string, nodes []RoutesV2PipelineRequestNode, ) *CreatePipelineRequest`

NewCreatePipelineRequest instantiates a new CreatePipelineRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreatePipelineRequestWithDefaults

`func NewCreatePipelineRequestWithDefaults() *CreatePipelineRequest`

NewCreatePipelineRequestWithDefaults instantiates a new CreatePipelineRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDescription

`func (o *CreatePipelineRequest) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *CreatePipelineRequest) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *CreatePipelineRequest) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *CreatePipelineRequest) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetEdges

`func (o *CreatePipelineRequest) GetEdges() []RoutesV2PipelineRequestEdge`

GetEdges returns the Edges field if non-nil, zero value otherwise.

### GetEdgesOk

`func (o *CreatePipelineRequest) GetEdgesOk() (*[]RoutesV2PipelineRequestEdge, bool)`

GetEdgesOk returns a tuple with the Edges field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEdges

`func (o *CreatePipelineRequest) SetEdges(v []RoutesV2PipelineRequestEdge)`

SetEdges sets Edges field to given value.


### GetEnabled

`func (o *CreatePipelineRequest) GetEnabled() bool`

GetEnabled returns the Enabled field if non-nil, zero value otherwise.

### GetEnabledOk

`func (o *CreatePipelineRequest) GetEnabledOk() (*bool, bool)`

GetEnabledOk returns a tuple with the Enabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnabled

`func (o *CreatePipelineRequest) SetEnabled(v bool)`

SetEnabled sets Enabled field to given value.


### GetName

`func (o *CreatePipelineRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *CreatePipelineRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *CreatePipelineRequest) SetName(v string)`

SetName sets Name field to given value.


### GetNodes

`func (o *CreatePipelineRequest) GetNodes() []RoutesV2PipelineRequestNode`

GetNodes returns the Nodes field if non-nil, zero value otherwise.

### GetNodesOk

`func (o *CreatePipelineRequest) GetNodesOk() (*[]RoutesV2PipelineRequestNode, bool)`

GetNodesOk returns a tuple with the Nodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNodes

`func (o *CreatePipelineRequest) SetNodes(v []RoutesV2PipelineRequestNode)`

SetNodes sets Nodes field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


