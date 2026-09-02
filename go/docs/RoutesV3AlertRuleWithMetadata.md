# RoutesV3AlertRuleWithMetadata

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Active** | Pointer to **bool** |  | [optional] 
**CreatedAt** | Pointer to **string** |  | [optional] 
**Description** | Pointer to **string** |  | [optional] 
**Id** | Pointer to **string** |  | [optional] 
**InvertSelection** | Pointer to **bool** | InvertSelection flips the meaning of PipelineIDs from an include-list to an exclude-list, so the rule monitors every pipeline except those listed. It only applies to pipeline-granularity rule types; billing- and organization-scoped types never consult PipelineIDs. | [optional] 
**ManagedBy** | Pointer to [**ModelsManagedBy**](ModelsManagedBy.md) |  | [optional] 
**Name** | Pointer to **string** |  | [optional] 
**OrganizationId** | Pointer to **string** |  | [optional] 
**PipelineIds** | Pointer to **[]string** |  | [optional] 
**ResourceMetadata** | Pointer to [**ConnectormetaResourceMetadata**](ConnectormetaResourceMetadata.md) |  | [optional] 
**RuleConfig** | Pointer to **map[string]interface{}** |  | [optional] 
**Severity** | Pointer to **string** |  | [optional] 
**Type** | Pointer to **string** |  | [optional] 
**UpdatedAt** | Pointer to **string** |  | [optional] 

## Methods

### NewRoutesV3AlertRuleWithMetadata

`func NewRoutesV3AlertRuleWithMetadata() *RoutesV3AlertRuleWithMetadata`

NewRoutesV3AlertRuleWithMetadata instantiates a new RoutesV3AlertRuleWithMetadata object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoutesV3AlertRuleWithMetadataWithDefaults

`func NewRoutesV3AlertRuleWithMetadataWithDefaults() *RoutesV3AlertRuleWithMetadata`

NewRoutesV3AlertRuleWithMetadataWithDefaults instantiates a new RoutesV3AlertRuleWithMetadata object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetActive

`func (o *RoutesV3AlertRuleWithMetadata) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *RoutesV3AlertRuleWithMetadata) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *RoutesV3AlertRuleWithMetadata) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *RoutesV3AlertRuleWithMetadata) HasActive() bool`

HasActive returns a boolean if a field has been set.

### GetCreatedAt

`func (o *RoutesV3AlertRuleWithMetadata) GetCreatedAt() string`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *RoutesV3AlertRuleWithMetadata) GetCreatedAtOk() (*string, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *RoutesV3AlertRuleWithMetadata) SetCreatedAt(v string)`

SetCreatedAt sets CreatedAt field to given value.

### HasCreatedAt

`func (o *RoutesV3AlertRuleWithMetadata) HasCreatedAt() bool`

HasCreatedAt returns a boolean if a field has been set.

### GetDescription

`func (o *RoutesV3AlertRuleWithMetadata) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *RoutesV3AlertRuleWithMetadata) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *RoutesV3AlertRuleWithMetadata) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *RoutesV3AlertRuleWithMetadata) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetId

`func (o *RoutesV3AlertRuleWithMetadata) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *RoutesV3AlertRuleWithMetadata) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *RoutesV3AlertRuleWithMetadata) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *RoutesV3AlertRuleWithMetadata) HasId() bool`

HasId returns a boolean if a field has been set.

### GetInvertSelection

`func (o *RoutesV3AlertRuleWithMetadata) GetInvertSelection() bool`

GetInvertSelection returns the InvertSelection field if non-nil, zero value otherwise.

### GetInvertSelectionOk

`func (o *RoutesV3AlertRuleWithMetadata) GetInvertSelectionOk() (*bool, bool)`

GetInvertSelectionOk returns a tuple with the InvertSelection field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInvertSelection

`func (o *RoutesV3AlertRuleWithMetadata) SetInvertSelection(v bool)`

SetInvertSelection sets InvertSelection field to given value.

### HasInvertSelection

`func (o *RoutesV3AlertRuleWithMetadata) HasInvertSelection() bool`

HasInvertSelection returns a boolean if a field has been set.

### GetManagedBy

`func (o *RoutesV3AlertRuleWithMetadata) GetManagedBy() ModelsManagedBy`

GetManagedBy returns the ManagedBy field if non-nil, zero value otherwise.

### GetManagedByOk

`func (o *RoutesV3AlertRuleWithMetadata) GetManagedByOk() (*ModelsManagedBy, bool)`

GetManagedByOk returns a tuple with the ManagedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManagedBy

`func (o *RoutesV3AlertRuleWithMetadata) SetManagedBy(v ModelsManagedBy)`

SetManagedBy sets ManagedBy field to given value.

### HasManagedBy

`func (o *RoutesV3AlertRuleWithMetadata) HasManagedBy() bool`

HasManagedBy returns a boolean if a field has been set.

### GetName

`func (o *RoutesV3AlertRuleWithMetadata) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *RoutesV3AlertRuleWithMetadata) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *RoutesV3AlertRuleWithMetadata) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *RoutesV3AlertRuleWithMetadata) HasName() bool`

HasName returns a boolean if a field has been set.

### GetOrganizationId

`func (o *RoutesV3AlertRuleWithMetadata) GetOrganizationId() string`

GetOrganizationId returns the OrganizationId field if non-nil, zero value otherwise.

### GetOrganizationIdOk

`func (o *RoutesV3AlertRuleWithMetadata) GetOrganizationIdOk() (*string, bool)`

GetOrganizationIdOk returns a tuple with the OrganizationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrganizationId

`func (o *RoutesV3AlertRuleWithMetadata) SetOrganizationId(v string)`

SetOrganizationId sets OrganizationId field to given value.

### HasOrganizationId

`func (o *RoutesV3AlertRuleWithMetadata) HasOrganizationId() bool`

HasOrganizationId returns a boolean if a field has been set.

### GetPipelineIds

`func (o *RoutesV3AlertRuleWithMetadata) GetPipelineIds() []string`

GetPipelineIds returns the PipelineIds field if non-nil, zero value otherwise.

### GetPipelineIdsOk

`func (o *RoutesV3AlertRuleWithMetadata) GetPipelineIdsOk() (*[]string, bool)`

GetPipelineIdsOk returns a tuple with the PipelineIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPipelineIds

`func (o *RoutesV3AlertRuleWithMetadata) SetPipelineIds(v []string)`

SetPipelineIds sets PipelineIds field to given value.

### HasPipelineIds

`func (o *RoutesV3AlertRuleWithMetadata) HasPipelineIds() bool`

HasPipelineIds returns a boolean if a field has been set.

### GetResourceMetadata

`func (o *RoutesV3AlertRuleWithMetadata) GetResourceMetadata() ConnectormetaResourceMetadata`

GetResourceMetadata returns the ResourceMetadata field if non-nil, zero value otherwise.

### GetResourceMetadataOk

`func (o *RoutesV3AlertRuleWithMetadata) GetResourceMetadataOk() (*ConnectormetaResourceMetadata, bool)`

GetResourceMetadataOk returns a tuple with the ResourceMetadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResourceMetadata

`func (o *RoutesV3AlertRuleWithMetadata) SetResourceMetadata(v ConnectormetaResourceMetadata)`

SetResourceMetadata sets ResourceMetadata field to given value.

### HasResourceMetadata

`func (o *RoutesV3AlertRuleWithMetadata) HasResourceMetadata() bool`

HasResourceMetadata returns a boolean if a field has been set.

### GetRuleConfig

`func (o *RoutesV3AlertRuleWithMetadata) GetRuleConfig() map[string]interface{}`

GetRuleConfig returns the RuleConfig field if non-nil, zero value otherwise.

### GetRuleConfigOk

`func (o *RoutesV3AlertRuleWithMetadata) GetRuleConfigOk() (*map[string]interface{}, bool)`

GetRuleConfigOk returns a tuple with the RuleConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRuleConfig

`func (o *RoutesV3AlertRuleWithMetadata) SetRuleConfig(v map[string]interface{})`

SetRuleConfig sets RuleConfig field to given value.

### HasRuleConfig

`func (o *RoutesV3AlertRuleWithMetadata) HasRuleConfig() bool`

HasRuleConfig returns a boolean if a field has been set.

### GetSeverity

`func (o *RoutesV3AlertRuleWithMetadata) GetSeverity() string`

GetSeverity returns the Severity field if non-nil, zero value otherwise.

### GetSeverityOk

`func (o *RoutesV3AlertRuleWithMetadata) GetSeverityOk() (*string, bool)`

GetSeverityOk returns a tuple with the Severity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSeverity

`func (o *RoutesV3AlertRuleWithMetadata) SetSeverity(v string)`

SetSeverity sets Severity field to given value.

### HasSeverity

`func (o *RoutesV3AlertRuleWithMetadata) HasSeverity() bool`

HasSeverity returns a boolean if a field has been set.

### GetType

`func (o *RoutesV3AlertRuleWithMetadata) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *RoutesV3AlertRuleWithMetadata) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *RoutesV3AlertRuleWithMetadata) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *RoutesV3AlertRuleWithMetadata) HasType() bool`

HasType returns a boolean if a field has been set.

### GetUpdatedAt

`func (o *RoutesV3AlertRuleWithMetadata) GetUpdatedAt() string`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *RoutesV3AlertRuleWithMetadata) GetUpdatedAtOk() (*string, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *RoutesV3AlertRuleWithMetadata) SetUpdatedAt(v string)`

SetUpdatedAt sets UpdatedAt field to given value.

### HasUpdatedAt

`func (o *RoutesV3AlertRuleWithMetadata) HasUpdatedAt() bool`

HasUpdatedAt returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


