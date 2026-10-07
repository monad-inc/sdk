# RoutesV3AlertRuleResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Active** | Pointer to **bool** |  | [optional] 
**CreatedAt** | Pointer to **string** |  | [optional] 
**Description** | Pointer to **string** |  | [optional] 
**Id** | Pointer to **string** |  | [optional] 
**InvertSelection** | Pointer to **bool** |  | [optional] 
**ManagedBy** | Pointer to [**ModelsManagedBy**](ModelsManagedBy.md) |  | [optional] 
**Name** | Pointer to **string** |  | [optional] 
**OrganizationId** | Pointer to **string** |  | [optional] 
**PipelineIds** | Pointer to **[]string** |  | [optional] 
**ResourceMetadata** | Pointer to [**ConnectormetaResourceMetadata**](ConnectormetaResourceMetadata.md) |  | [optional] 
**RuleConfig** | Pointer to **map[string]interface{}** |  | [optional] 
**Severity** | Pointer to **string** |  | [optional] 
**Tags** | Pointer to **[]string** | TODO(ENG-11020): drop omitempty once tagging is GA; it matches pipelines meanwhile. | [optional] 
**Type** | Pointer to **string** |  | [optional] 
**UpdatedAt** | Pointer to **string** |  | [optional] 

## Methods

### NewRoutesV3AlertRuleResponse

`func NewRoutesV3AlertRuleResponse() *RoutesV3AlertRuleResponse`

NewRoutesV3AlertRuleResponse instantiates a new RoutesV3AlertRuleResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoutesV3AlertRuleResponseWithDefaults

`func NewRoutesV3AlertRuleResponseWithDefaults() *RoutesV3AlertRuleResponse`

NewRoutesV3AlertRuleResponseWithDefaults instantiates a new RoutesV3AlertRuleResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetActive

`func (o *RoutesV3AlertRuleResponse) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *RoutesV3AlertRuleResponse) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *RoutesV3AlertRuleResponse) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *RoutesV3AlertRuleResponse) HasActive() bool`

HasActive returns a boolean if a field has been set.

### GetCreatedAt

`func (o *RoutesV3AlertRuleResponse) GetCreatedAt() string`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *RoutesV3AlertRuleResponse) GetCreatedAtOk() (*string, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *RoutesV3AlertRuleResponse) SetCreatedAt(v string)`

SetCreatedAt sets CreatedAt field to given value.

### HasCreatedAt

`func (o *RoutesV3AlertRuleResponse) HasCreatedAt() bool`

HasCreatedAt returns a boolean if a field has been set.

### GetDescription

`func (o *RoutesV3AlertRuleResponse) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *RoutesV3AlertRuleResponse) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *RoutesV3AlertRuleResponse) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *RoutesV3AlertRuleResponse) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetId

`func (o *RoutesV3AlertRuleResponse) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *RoutesV3AlertRuleResponse) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *RoutesV3AlertRuleResponse) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *RoutesV3AlertRuleResponse) HasId() bool`

HasId returns a boolean if a field has been set.

### GetInvertSelection

`func (o *RoutesV3AlertRuleResponse) GetInvertSelection() bool`

GetInvertSelection returns the InvertSelection field if non-nil, zero value otherwise.

### GetInvertSelectionOk

`func (o *RoutesV3AlertRuleResponse) GetInvertSelectionOk() (*bool, bool)`

GetInvertSelectionOk returns a tuple with the InvertSelection field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInvertSelection

`func (o *RoutesV3AlertRuleResponse) SetInvertSelection(v bool)`

SetInvertSelection sets InvertSelection field to given value.

### HasInvertSelection

`func (o *RoutesV3AlertRuleResponse) HasInvertSelection() bool`

HasInvertSelection returns a boolean if a field has been set.

### GetManagedBy

`func (o *RoutesV3AlertRuleResponse) GetManagedBy() ModelsManagedBy`

GetManagedBy returns the ManagedBy field if non-nil, zero value otherwise.

### GetManagedByOk

`func (o *RoutesV3AlertRuleResponse) GetManagedByOk() (*ModelsManagedBy, bool)`

GetManagedByOk returns a tuple with the ManagedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManagedBy

`func (o *RoutesV3AlertRuleResponse) SetManagedBy(v ModelsManagedBy)`

SetManagedBy sets ManagedBy field to given value.

### HasManagedBy

`func (o *RoutesV3AlertRuleResponse) HasManagedBy() bool`

HasManagedBy returns a boolean if a field has been set.

### GetName

`func (o *RoutesV3AlertRuleResponse) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *RoutesV3AlertRuleResponse) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *RoutesV3AlertRuleResponse) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *RoutesV3AlertRuleResponse) HasName() bool`

HasName returns a boolean if a field has been set.

### GetOrganizationId

`func (o *RoutesV3AlertRuleResponse) GetOrganizationId() string`

GetOrganizationId returns the OrganizationId field if non-nil, zero value otherwise.

### GetOrganizationIdOk

`func (o *RoutesV3AlertRuleResponse) GetOrganizationIdOk() (*string, bool)`

GetOrganizationIdOk returns a tuple with the OrganizationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrganizationId

`func (o *RoutesV3AlertRuleResponse) SetOrganizationId(v string)`

SetOrganizationId sets OrganizationId field to given value.

### HasOrganizationId

`func (o *RoutesV3AlertRuleResponse) HasOrganizationId() bool`

HasOrganizationId returns a boolean if a field has been set.

### GetPipelineIds

`func (o *RoutesV3AlertRuleResponse) GetPipelineIds() []string`

GetPipelineIds returns the PipelineIds field if non-nil, zero value otherwise.

### GetPipelineIdsOk

`func (o *RoutesV3AlertRuleResponse) GetPipelineIdsOk() (*[]string, bool)`

GetPipelineIdsOk returns a tuple with the PipelineIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPipelineIds

`func (o *RoutesV3AlertRuleResponse) SetPipelineIds(v []string)`

SetPipelineIds sets PipelineIds field to given value.

### HasPipelineIds

`func (o *RoutesV3AlertRuleResponse) HasPipelineIds() bool`

HasPipelineIds returns a boolean if a field has been set.

### GetResourceMetadata

`func (o *RoutesV3AlertRuleResponse) GetResourceMetadata() ConnectormetaResourceMetadata`

GetResourceMetadata returns the ResourceMetadata field if non-nil, zero value otherwise.

### GetResourceMetadataOk

`func (o *RoutesV3AlertRuleResponse) GetResourceMetadataOk() (*ConnectormetaResourceMetadata, bool)`

GetResourceMetadataOk returns a tuple with the ResourceMetadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResourceMetadata

`func (o *RoutesV3AlertRuleResponse) SetResourceMetadata(v ConnectormetaResourceMetadata)`

SetResourceMetadata sets ResourceMetadata field to given value.

### HasResourceMetadata

`func (o *RoutesV3AlertRuleResponse) HasResourceMetadata() bool`

HasResourceMetadata returns a boolean if a field has been set.

### GetRuleConfig

`func (o *RoutesV3AlertRuleResponse) GetRuleConfig() map[string]interface{}`

GetRuleConfig returns the RuleConfig field if non-nil, zero value otherwise.

### GetRuleConfigOk

`func (o *RoutesV3AlertRuleResponse) GetRuleConfigOk() (*map[string]interface{}, bool)`

GetRuleConfigOk returns a tuple with the RuleConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRuleConfig

`func (o *RoutesV3AlertRuleResponse) SetRuleConfig(v map[string]interface{})`

SetRuleConfig sets RuleConfig field to given value.

### HasRuleConfig

`func (o *RoutesV3AlertRuleResponse) HasRuleConfig() bool`

HasRuleConfig returns a boolean if a field has been set.

### GetSeverity

`func (o *RoutesV3AlertRuleResponse) GetSeverity() string`

GetSeverity returns the Severity field if non-nil, zero value otherwise.

### GetSeverityOk

`func (o *RoutesV3AlertRuleResponse) GetSeverityOk() (*string, bool)`

GetSeverityOk returns a tuple with the Severity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSeverity

`func (o *RoutesV3AlertRuleResponse) SetSeverity(v string)`

SetSeverity sets Severity field to given value.

### HasSeverity

`func (o *RoutesV3AlertRuleResponse) HasSeverity() bool`

HasSeverity returns a boolean if a field has been set.

### GetTags

`func (o *RoutesV3AlertRuleResponse) GetTags() []string`

GetTags returns the Tags field if non-nil, zero value otherwise.

### GetTagsOk

`func (o *RoutesV3AlertRuleResponse) GetTagsOk() (*[]string, bool)`

GetTagsOk returns a tuple with the Tags field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTags

`func (o *RoutesV3AlertRuleResponse) SetTags(v []string)`

SetTags sets Tags field to given value.

### HasTags

`func (o *RoutesV3AlertRuleResponse) HasTags() bool`

HasTags returns a boolean if a field has been set.

### GetType

`func (o *RoutesV3AlertRuleResponse) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *RoutesV3AlertRuleResponse) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *RoutesV3AlertRuleResponse) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *RoutesV3AlertRuleResponse) HasType() bool`

HasType returns a boolean if a field has been set.

### GetUpdatedAt

`func (o *RoutesV3AlertRuleResponse) GetUpdatedAt() string`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *RoutesV3AlertRuleResponse) GetUpdatedAtOk() (*string, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *RoutesV3AlertRuleResponse) SetUpdatedAt(v string)`

SetUpdatedAt sets UpdatedAt field to given value.

### HasUpdatedAt

`func (o *RoutesV3AlertRuleResponse) HasUpdatedAt() bool`

HasUpdatedAt returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


