# RoutesV2PipelineRequestEdge

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Conditions** | Pointer to [**ModelsConditionEvaluatable**](ModelsConditionEvaluatable.md) |  | [optional] 
**Description** | Pointer to **string** |  | [optional] 
**FromNodeInstanceId** | **string** |  | 
**Name** | Pointer to **string** |  | [optional] 
**ToNodeInstanceId** | **string** |  | 

## Methods

### NewRoutesV2PipelineRequestEdge

`func NewRoutesV2PipelineRequestEdge(fromNodeInstanceId string, toNodeInstanceId string, ) *RoutesV2PipelineRequestEdge`

NewRoutesV2PipelineRequestEdge instantiates a new RoutesV2PipelineRequestEdge object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoutesV2PipelineRequestEdgeWithDefaults

`func NewRoutesV2PipelineRequestEdgeWithDefaults() *RoutesV2PipelineRequestEdge`

NewRoutesV2PipelineRequestEdgeWithDefaults instantiates a new RoutesV2PipelineRequestEdge object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetConditions

`func (o *RoutesV2PipelineRequestEdge) GetConditions() ModelsConditionEvaluatable`

GetConditions returns the Conditions field if non-nil, zero value otherwise.

### GetConditionsOk

`func (o *RoutesV2PipelineRequestEdge) GetConditionsOk() (*ModelsConditionEvaluatable, bool)`

GetConditionsOk returns a tuple with the Conditions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConditions

`func (o *RoutesV2PipelineRequestEdge) SetConditions(v ModelsConditionEvaluatable)`

SetConditions sets Conditions field to given value.

### HasConditions

`func (o *RoutesV2PipelineRequestEdge) HasConditions() bool`

HasConditions returns a boolean if a field has been set.

### GetDescription

`func (o *RoutesV2PipelineRequestEdge) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *RoutesV2PipelineRequestEdge) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *RoutesV2PipelineRequestEdge) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *RoutesV2PipelineRequestEdge) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetFromNodeInstanceId

`func (o *RoutesV2PipelineRequestEdge) GetFromNodeInstanceId() string`

GetFromNodeInstanceId returns the FromNodeInstanceId field if non-nil, zero value otherwise.

### GetFromNodeInstanceIdOk

`func (o *RoutesV2PipelineRequestEdge) GetFromNodeInstanceIdOk() (*string, bool)`

GetFromNodeInstanceIdOk returns a tuple with the FromNodeInstanceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFromNodeInstanceId

`func (o *RoutesV2PipelineRequestEdge) SetFromNodeInstanceId(v string)`

SetFromNodeInstanceId sets FromNodeInstanceId field to given value.


### GetName

`func (o *RoutesV2PipelineRequestEdge) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *RoutesV2PipelineRequestEdge) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *RoutesV2PipelineRequestEdge) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *RoutesV2PipelineRequestEdge) HasName() bool`

HasName returns a boolean if a field has been set.

### GetToNodeInstanceId

`func (o *RoutesV2PipelineRequestEdge) GetToNodeInstanceId() string`

GetToNodeInstanceId returns the ToNodeInstanceId field if non-nil, zero value otherwise.

### GetToNodeInstanceIdOk

`func (o *RoutesV2PipelineRequestEdge) GetToNodeInstanceIdOk() (*string, bool)`

GetToNodeInstanceIdOk returns a tuple with the ToNodeInstanceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetToNodeInstanceId

`func (o *RoutesV2PipelineRequestEdge) SetToNodeInstanceId(v string)`

SetToNodeInstanceId sets ToNodeInstanceId field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


