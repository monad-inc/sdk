# RoutesV2UpdatePipelineRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Description** | Pointer to **string** |  | [optional] 
**Edges** | [**[]RoutesV2PipelineRequestEdge**](RoutesV2PipelineRequestEdge.md) |  | 
**Enabled** | **bool** |  | 
**Name** | **string** |  | 
**Nodes** | [**[]RoutesV2PipelineRequestNode**](RoutesV2PipelineRequestNode.md) |  | 

## Methods

### NewRoutesV2UpdatePipelineRequest

`func NewRoutesV2UpdatePipelineRequest(edges []RoutesV2PipelineRequestEdge, enabled bool, name string, nodes []RoutesV2PipelineRequestNode, ) *RoutesV2UpdatePipelineRequest`

NewRoutesV2UpdatePipelineRequest instantiates a new RoutesV2UpdatePipelineRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoutesV2UpdatePipelineRequestWithDefaults

`func NewRoutesV2UpdatePipelineRequestWithDefaults() *RoutesV2UpdatePipelineRequest`

NewRoutesV2UpdatePipelineRequestWithDefaults instantiates a new RoutesV2UpdatePipelineRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDescription

`func (o *RoutesV2UpdatePipelineRequest) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *RoutesV2UpdatePipelineRequest) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *RoutesV2UpdatePipelineRequest) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *RoutesV2UpdatePipelineRequest) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetEdges

`func (o *RoutesV2UpdatePipelineRequest) GetEdges() []RoutesV2PipelineRequestEdge`

GetEdges returns the Edges field if non-nil, zero value otherwise.

### GetEdgesOk

`func (o *RoutesV2UpdatePipelineRequest) GetEdgesOk() (*[]RoutesV2PipelineRequestEdge, bool)`

GetEdgesOk returns a tuple with the Edges field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEdges

`func (o *RoutesV2UpdatePipelineRequest) SetEdges(v []RoutesV2PipelineRequestEdge)`

SetEdges sets Edges field to given value.


### GetEnabled

`func (o *RoutesV2UpdatePipelineRequest) GetEnabled() bool`

GetEnabled returns the Enabled field if non-nil, zero value otherwise.

### GetEnabledOk

`func (o *RoutesV2UpdatePipelineRequest) GetEnabledOk() (*bool, bool)`

GetEnabledOk returns a tuple with the Enabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnabled

`func (o *RoutesV2UpdatePipelineRequest) SetEnabled(v bool)`

SetEnabled sets Enabled field to given value.


### GetName

`func (o *RoutesV2UpdatePipelineRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *RoutesV2UpdatePipelineRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *RoutesV2UpdatePipelineRequest) SetName(v string)`

SetName sets Name field to given value.


### GetNodes

`func (o *RoutesV2UpdatePipelineRequest) GetNodes() []RoutesV2PipelineRequestNode`

GetNodes returns the Nodes field if non-nil, zero value otherwise.

### GetNodesOk

`func (o *RoutesV2UpdatePipelineRequest) GetNodesOk() (*[]RoutesV2PipelineRequestNode, bool)`

GetNodesOk returns a tuple with the Nodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNodes

`func (o *RoutesV2UpdatePipelineRequest) SetNodes(v []RoutesV2PipelineRequestNode)`

SetNodes sets Nodes field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


