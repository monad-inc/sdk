# ModelsSchemaHistory

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CreatedAt** | Pointer to **string** |  | [optional] 
**EdgeId** | Pointer to **string** |  | [optional] 
**EventTags** | Pointer to **[]string** |  | [optional] 
**FromNodeName** | Pointer to **string** |  | [optional] 
**Id** | Pointer to **string** |  | [optional] 
**OrganizationId** | Pointer to **string** |  | [optional] 
**PipelineId** | Pointer to **string** |  | [optional] 
**PipelineName** | Pointer to **string** |  | [optional] 
**Schema** | Pointer to [**map[string]ModelsFieldState**](ModelsFieldState.md) |  | [optional] 
**ToNodeName** | Pointer to **string** |  | [optional] 

## Methods

### NewModelsSchemaHistory

`func NewModelsSchemaHistory() *ModelsSchemaHistory`

NewModelsSchemaHistory instantiates a new ModelsSchemaHistory object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewModelsSchemaHistoryWithDefaults

`func NewModelsSchemaHistoryWithDefaults() *ModelsSchemaHistory`

NewModelsSchemaHistoryWithDefaults instantiates a new ModelsSchemaHistory object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCreatedAt

`func (o *ModelsSchemaHistory) GetCreatedAt() string`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *ModelsSchemaHistory) GetCreatedAtOk() (*string, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *ModelsSchemaHistory) SetCreatedAt(v string)`

SetCreatedAt sets CreatedAt field to given value.

### HasCreatedAt

`func (o *ModelsSchemaHistory) HasCreatedAt() bool`

HasCreatedAt returns a boolean if a field has been set.

### GetEdgeId

`func (o *ModelsSchemaHistory) GetEdgeId() string`

GetEdgeId returns the EdgeId field if non-nil, zero value otherwise.

### GetEdgeIdOk

`func (o *ModelsSchemaHistory) GetEdgeIdOk() (*string, bool)`

GetEdgeIdOk returns a tuple with the EdgeId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEdgeId

`func (o *ModelsSchemaHistory) SetEdgeId(v string)`

SetEdgeId sets EdgeId field to given value.

### HasEdgeId

`func (o *ModelsSchemaHistory) HasEdgeId() bool`

HasEdgeId returns a boolean if a field has been set.

### GetEventTags

`func (o *ModelsSchemaHistory) GetEventTags() []string`

GetEventTags returns the EventTags field if non-nil, zero value otherwise.

### GetEventTagsOk

`func (o *ModelsSchemaHistory) GetEventTagsOk() (*[]string, bool)`

GetEventTagsOk returns a tuple with the EventTags field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventTags

`func (o *ModelsSchemaHistory) SetEventTags(v []string)`

SetEventTags sets EventTags field to given value.

### HasEventTags

`func (o *ModelsSchemaHistory) HasEventTags() bool`

HasEventTags returns a boolean if a field has been set.

### GetFromNodeName

`func (o *ModelsSchemaHistory) GetFromNodeName() string`

GetFromNodeName returns the FromNodeName field if non-nil, zero value otherwise.

### GetFromNodeNameOk

`func (o *ModelsSchemaHistory) GetFromNodeNameOk() (*string, bool)`

GetFromNodeNameOk returns a tuple with the FromNodeName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFromNodeName

`func (o *ModelsSchemaHistory) SetFromNodeName(v string)`

SetFromNodeName sets FromNodeName field to given value.

### HasFromNodeName

`func (o *ModelsSchemaHistory) HasFromNodeName() bool`

HasFromNodeName returns a boolean if a field has been set.

### GetId

`func (o *ModelsSchemaHistory) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ModelsSchemaHistory) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ModelsSchemaHistory) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *ModelsSchemaHistory) HasId() bool`

HasId returns a boolean if a field has been set.

### GetOrganizationId

`func (o *ModelsSchemaHistory) GetOrganizationId() string`

GetOrganizationId returns the OrganizationId field if non-nil, zero value otherwise.

### GetOrganizationIdOk

`func (o *ModelsSchemaHistory) GetOrganizationIdOk() (*string, bool)`

GetOrganizationIdOk returns a tuple with the OrganizationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrganizationId

`func (o *ModelsSchemaHistory) SetOrganizationId(v string)`

SetOrganizationId sets OrganizationId field to given value.

### HasOrganizationId

`func (o *ModelsSchemaHistory) HasOrganizationId() bool`

HasOrganizationId returns a boolean if a field has been set.

### GetPipelineId

`func (o *ModelsSchemaHistory) GetPipelineId() string`

GetPipelineId returns the PipelineId field if non-nil, zero value otherwise.

### GetPipelineIdOk

`func (o *ModelsSchemaHistory) GetPipelineIdOk() (*string, bool)`

GetPipelineIdOk returns a tuple with the PipelineId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPipelineId

`func (o *ModelsSchemaHistory) SetPipelineId(v string)`

SetPipelineId sets PipelineId field to given value.

### HasPipelineId

`func (o *ModelsSchemaHistory) HasPipelineId() bool`

HasPipelineId returns a boolean if a field has been set.

### GetPipelineName

`func (o *ModelsSchemaHistory) GetPipelineName() string`

GetPipelineName returns the PipelineName field if non-nil, zero value otherwise.

### GetPipelineNameOk

`func (o *ModelsSchemaHistory) GetPipelineNameOk() (*string, bool)`

GetPipelineNameOk returns a tuple with the PipelineName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPipelineName

`func (o *ModelsSchemaHistory) SetPipelineName(v string)`

SetPipelineName sets PipelineName field to given value.

### HasPipelineName

`func (o *ModelsSchemaHistory) HasPipelineName() bool`

HasPipelineName returns a boolean if a field has been set.

### GetSchema

`func (o *ModelsSchemaHistory) GetSchema() map[string]ModelsFieldState`

GetSchema returns the Schema field if non-nil, zero value otherwise.

### GetSchemaOk

`func (o *ModelsSchemaHistory) GetSchemaOk() (*map[string]ModelsFieldState, bool)`

GetSchemaOk returns a tuple with the Schema field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSchema

`func (o *ModelsSchemaHistory) SetSchema(v map[string]ModelsFieldState)`

SetSchema sets Schema field to given value.

### HasSchema

`func (o *ModelsSchemaHistory) HasSchema() bool`

HasSchema returns a boolean if a field has been set.

### GetToNodeName

`func (o *ModelsSchemaHistory) GetToNodeName() string`

GetToNodeName returns the ToNodeName field if non-nil, zero value otherwise.

### GetToNodeNameOk

`func (o *ModelsSchemaHistory) GetToNodeNameOk() (*string, bool)`

GetToNodeNameOk returns a tuple with the ToNodeName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetToNodeName

`func (o *ModelsSchemaHistory) SetToNodeName(v string)`

SetToNodeName sets ToNodeName field to given value.

### HasToNodeName

`func (o *ModelsSchemaHistory) HasToNodeName() bool`

HasToNodeName returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


