# ModelsPipelineEdge

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Conditions** | Pointer to [**ModelsConditionEvaluatable**](ModelsConditionEvaluatable.md) |  | [optional] 
**CreatedAt** | Pointer to **string** |  | [optional] 
**Description** | Pointer to **string** |  | [optional] 
**Disabled** | Pointer to **bool** |  | [optional] 
**FromNodeInstanceId** | Pointer to **string** |  | [optional] 
**Id** | Pointer to **string** |  | [optional] 
**Name** | Pointer to **string** |  | [optional] 
**OrganizationId** | Pointer to **string** |  | [optional] 
**PipelineId** | Pointer to **string** |  | [optional] 
**ToNodeInstanceId** | Pointer to **string** |  | [optional] 

## Methods

### NewModelsPipelineEdge

`func NewModelsPipelineEdge() *ModelsPipelineEdge`

NewModelsPipelineEdge instantiates a new ModelsPipelineEdge object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewModelsPipelineEdgeWithDefaults

`func NewModelsPipelineEdgeWithDefaults() *ModelsPipelineEdge`

NewModelsPipelineEdgeWithDefaults instantiates a new ModelsPipelineEdge object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetConditions

`func (o *ModelsPipelineEdge) GetConditions() ModelsConditionEvaluatable`

GetConditions returns the Conditions field if non-nil, zero value otherwise.

### GetConditionsOk

`func (o *ModelsPipelineEdge) GetConditionsOk() (*ModelsConditionEvaluatable, bool)`

GetConditionsOk returns a tuple with the Conditions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConditions

`func (o *ModelsPipelineEdge) SetConditions(v ModelsConditionEvaluatable)`

SetConditions sets Conditions field to given value.

### HasConditions

`func (o *ModelsPipelineEdge) HasConditions() bool`

HasConditions returns a boolean if a field has been set.

### GetCreatedAt

`func (o *ModelsPipelineEdge) GetCreatedAt() string`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *ModelsPipelineEdge) GetCreatedAtOk() (*string, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *ModelsPipelineEdge) SetCreatedAt(v string)`

SetCreatedAt sets CreatedAt field to given value.

### HasCreatedAt

`func (o *ModelsPipelineEdge) HasCreatedAt() bool`

HasCreatedAt returns a boolean if a field has been set.

### GetDescription

`func (o *ModelsPipelineEdge) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ModelsPipelineEdge) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ModelsPipelineEdge) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *ModelsPipelineEdge) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetDisabled

`func (o *ModelsPipelineEdge) GetDisabled() bool`

GetDisabled returns the Disabled field if non-nil, zero value otherwise.

### GetDisabledOk

`func (o *ModelsPipelineEdge) GetDisabledOk() (*bool, bool)`

GetDisabledOk returns a tuple with the Disabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisabled

`func (o *ModelsPipelineEdge) SetDisabled(v bool)`

SetDisabled sets Disabled field to given value.

### HasDisabled

`func (o *ModelsPipelineEdge) HasDisabled() bool`

HasDisabled returns a boolean if a field has been set.

### GetFromNodeInstanceId

`func (o *ModelsPipelineEdge) GetFromNodeInstanceId() string`

GetFromNodeInstanceId returns the FromNodeInstanceId field if non-nil, zero value otherwise.

### GetFromNodeInstanceIdOk

`func (o *ModelsPipelineEdge) GetFromNodeInstanceIdOk() (*string, bool)`

GetFromNodeInstanceIdOk returns a tuple with the FromNodeInstanceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFromNodeInstanceId

`func (o *ModelsPipelineEdge) SetFromNodeInstanceId(v string)`

SetFromNodeInstanceId sets FromNodeInstanceId field to given value.

### HasFromNodeInstanceId

`func (o *ModelsPipelineEdge) HasFromNodeInstanceId() bool`

HasFromNodeInstanceId returns a boolean if a field has been set.

### GetId

`func (o *ModelsPipelineEdge) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ModelsPipelineEdge) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ModelsPipelineEdge) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *ModelsPipelineEdge) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *ModelsPipelineEdge) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ModelsPipelineEdge) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ModelsPipelineEdge) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *ModelsPipelineEdge) HasName() bool`

HasName returns a boolean if a field has been set.

### GetOrganizationId

`func (o *ModelsPipelineEdge) GetOrganizationId() string`

GetOrganizationId returns the OrganizationId field if non-nil, zero value otherwise.

### GetOrganizationIdOk

`func (o *ModelsPipelineEdge) GetOrganizationIdOk() (*string, bool)`

GetOrganizationIdOk returns a tuple with the OrganizationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrganizationId

`func (o *ModelsPipelineEdge) SetOrganizationId(v string)`

SetOrganizationId sets OrganizationId field to given value.

### HasOrganizationId

`func (o *ModelsPipelineEdge) HasOrganizationId() bool`

HasOrganizationId returns a boolean if a field has been set.

### GetPipelineId

`func (o *ModelsPipelineEdge) GetPipelineId() string`

GetPipelineId returns the PipelineId field if non-nil, zero value otherwise.

### GetPipelineIdOk

`func (o *ModelsPipelineEdge) GetPipelineIdOk() (*string, bool)`

GetPipelineIdOk returns a tuple with the PipelineId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPipelineId

`func (o *ModelsPipelineEdge) SetPipelineId(v string)`

SetPipelineId sets PipelineId field to given value.

### HasPipelineId

`func (o *ModelsPipelineEdge) HasPipelineId() bool`

HasPipelineId returns a boolean if a field has been set.

### GetToNodeInstanceId

`func (o *ModelsPipelineEdge) GetToNodeInstanceId() string`

GetToNodeInstanceId returns the ToNodeInstanceId field if non-nil, zero value otherwise.

### GetToNodeInstanceIdOk

`func (o *ModelsPipelineEdge) GetToNodeInstanceIdOk() (*string, bool)`

GetToNodeInstanceIdOk returns a tuple with the ToNodeInstanceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetToNodeInstanceId

`func (o *ModelsPipelineEdge) SetToNodeInstanceId(v string)`

SetToNodeInstanceId sets ToNodeInstanceId field to given value.

### HasToNodeInstanceId

`func (o *ModelsPipelineEdge) HasToNodeInstanceId() bool`

HasToNodeInstanceId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


