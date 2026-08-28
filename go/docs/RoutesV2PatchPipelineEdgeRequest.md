# RoutesV2PatchPipelineEdgeRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Conditions** | Pointer to [**ModelsConditionEvaluatable**](ModelsConditionEvaluatable.md) |  | [optional] 
**Description** | Pointer to **string** |  | [optional] 
**Disabled** | Pointer to **bool** |  | [optional] 
**Name** | Pointer to **string** |  | [optional] 
**SchemaDetectionSpec** | Pointer to [**ModelsSchemaDetection**](ModelsSchemaDetection.md) |  | [optional] 

## Methods

### NewRoutesV2PatchPipelineEdgeRequest

`func NewRoutesV2PatchPipelineEdgeRequest() *RoutesV2PatchPipelineEdgeRequest`

NewRoutesV2PatchPipelineEdgeRequest instantiates a new RoutesV2PatchPipelineEdgeRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoutesV2PatchPipelineEdgeRequestWithDefaults

`func NewRoutesV2PatchPipelineEdgeRequestWithDefaults() *RoutesV2PatchPipelineEdgeRequest`

NewRoutesV2PatchPipelineEdgeRequestWithDefaults instantiates a new RoutesV2PatchPipelineEdgeRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetConditions

`func (o *RoutesV2PatchPipelineEdgeRequest) GetConditions() ModelsConditionEvaluatable`

GetConditions returns the Conditions field if non-nil, zero value otherwise.

### GetConditionsOk

`func (o *RoutesV2PatchPipelineEdgeRequest) GetConditionsOk() (*ModelsConditionEvaluatable, bool)`

GetConditionsOk returns a tuple with the Conditions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConditions

`func (o *RoutesV2PatchPipelineEdgeRequest) SetConditions(v ModelsConditionEvaluatable)`

SetConditions sets Conditions field to given value.

### HasConditions

`func (o *RoutesV2PatchPipelineEdgeRequest) HasConditions() bool`

HasConditions returns a boolean if a field has been set.

### GetDescription

`func (o *RoutesV2PatchPipelineEdgeRequest) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *RoutesV2PatchPipelineEdgeRequest) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *RoutesV2PatchPipelineEdgeRequest) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *RoutesV2PatchPipelineEdgeRequest) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetDisabled

`func (o *RoutesV2PatchPipelineEdgeRequest) GetDisabled() bool`

GetDisabled returns the Disabled field if non-nil, zero value otherwise.

### GetDisabledOk

`func (o *RoutesV2PatchPipelineEdgeRequest) GetDisabledOk() (*bool, bool)`

GetDisabledOk returns a tuple with the Disabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisabled

`func (o *RoutesV2PatchPipelineEdgeRequest) SetDisabled(v bool)`

SetDisabled sets Disabled field to given value.

### HasDisabled

`func (o *RoutesV2PatchPipelineEdgeRequest) HasDisabled() bool`

HasDisabled returns a boolean if a field has been set.

### GetName

`func (o *RoutesV2PatchPipelineEdgeRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *RoutesV2PatchPipelineEdgeRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *RoutesV2PatchPipelineEdgeRequest) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *RoutesV2PatchPipelineEdgeRequest) HasName() bool`

HasName returns a boolean if a field has been set.

### GetSchemaDetectionSpec

`func (o *RoutesV2PatchPipelineEdgeRequest) GetSchemaDetectionSpec() ModelsSchemaDetection`

GetSchemaDetectionSpec returns the SchemaDetectionSpec field if non-nil, zero value otherwise.

### GetSchemaDetectionSpecOk

`func (o *RoutesV2PatchPipelineEdgeRequest) GetSchemaDetectionSpecOk() (*ModelsSchemaDetection, bool)`

GetSchemaDetectionSpecOk returns a tuple with the SchemaDetectionSpec field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSchemaDetectionSpec

`func (o *RoutesV2PatchPipelineEdgeRequest) SetSchemaDetectionSpec(v ModelsSchemaDetection)`

SetSchemaDetectionSpec sets SchemaDetectionSpec field to given value.

### HasSchemaDetectionSpec

`func (o *RoutesV2PatchPipelineEdgeRequest) HasSchemaDetectionSpec() bool`

HasSchemaDetectionSpec returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


