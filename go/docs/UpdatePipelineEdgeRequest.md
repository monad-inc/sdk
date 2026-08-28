# UpdatePipelineEdgeRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Conditions** | Pointer to [**ModelsConditionEvaluatable**](ModelsConditionEvaluatable.md) |  | [optional] 
**Description** | Pointer to **string** |  | [optional] 
**Disabled** | Pointer to **bool** |  | [optional] 
**Name** | Pointer to **string** |  | [optional] 
**SchemaDetectionSpec** | Pointer to [**ModelsSchemaDetection**](ModelsSchemaDetection.md) |  | [optional] 

## Methods

### NewUpdatePipelineEdgeRequest

`func NewUpdatePipelineEdgeRequest() *UpdatePipelineEdgeRequest`

NewUpdatePipelineEdgeRequest instantiates a new UpdatePipelineEdgeRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUpdatePipelineEdgeRequestWithDefaults

`func NewUpdatePipelineEdgeRequestWithDefaults() *UpdatePipelineEdgeRequest`

NewUpdatePipelineEdgeRequestWithDefaults instantiates a new UpdatePipelineEdgeRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetConditions

`func (o *UpdatePipelineEdgeRequest) GetConditions() ModelsConditionEvaluatable`

GetConditions returns the Conditions field if non-nil, zero value otherwise.

### GetConditionsOk

`func (o *UpdatePipelineEdgeRequest) GetConditionsOk() (*ModelsConditionEvaluatable, bool)`

GetConditionsOk returns a tuple with the Conditions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConditions

`func (o *UpdatePipelineEdgeRequest) SetConditions(v ModelsConditionEvaluatable)`

SetConditions sets Conditions field to given value.

### HasConditions

`func (o *UpdatePipelineEdgeRequest) HasConditions() bool`

HasConditions returns a boolean if a field has been set.

### GetDescription

`func (o *UpdatePipelineEdgeRequest) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *UpdatePipelineEdgeRequest) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *UpdatePipelineEdgeRequest) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *UpdatePipelineEdgeRequest) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetDisabled

`func (o *UpdatePipelineEdgeRequest) GetDisabled() bool`

GetDisabled returns the Disabled field if non-nil, zero value otherwise.

### GetDisabledOk

`func (o *UpdatePipelineEdgeRequest) GetDisabledOk() (*bool, bool)`

GetDisabledOk returns a tuple with the Disabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisabled

`func (o *UpdatePipelineEdgeRequest) SetDisabled(v bool)`

SetDisabled sets Disabled field to given value.

### HasDisabled

`func (o *UpdatePipelineEdgeRequest) HasDisabled() bool`

HasDisabled returns a boolean if a field has been set.

### GetName

`func (o *UpdatePipelineEdgeRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *UpdatePipelineEdgeRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *UpdatePipelineEdgeRequest) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *UpdatePipelineEdgeRequest) HasName() bool`

HasName returns a boolean if a field has been set.

### GetSchemaDetectionSpec

`func (o *UpdatePipelineEdgeRequest) GetSchemaDetectionSpec() ModelsSchemaDetection`

GetSchemaDetectionSpec returns the SchemaDetectionSpec field if non-nil, zero value otherwise.

### GetSchemaDetectionSpecOk

`func (o *UpdatePipelineEdgeRequest) GetSchemaDetectionSpecOk() (*ModelsSchemaDetection, bool)`

GetSchemaDetectionSpecOk returns a tuple with the SchemaDetectionSpec field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSchemaDetectionSpec

`func (o *UpdatePipelineEdgeRequest) SetSchemaDetectionSpec(v ModelsSchemaDetection)`

SetSchemaDetectionSpec sets SchemaDetectionSpec field to given value.

### HasSchemaDetectionSpec

`func (o *UpdatePipelineEdgeRequest) HasSchemaDetectionSpec() bool`

HasSchemaDetectionSpec returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


