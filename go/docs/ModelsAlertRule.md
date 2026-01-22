# ModelsAlertRule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Active** | Pointer to **bool** |  | [optional] 
**CreatedAt** | Pointer to **string** |  | [optional] 
**Description** | Pointer to **string** |  | [optional] 
**Id** | Pointer to **string** |  | [optional] 
**Name** | Pointer to **string** |  | [optional] 
**OrganizationId** | Pointer to **string** |  | [optional] 
**PipelineIds** | Pointer to **[]string** |  | [optional] 
**RuleConfig** | Pointer to **map[string]interface{}** |  | [optional] 
**Severity** | Pointer to **string** |  | [optional] 
**Type** | Pointer to **string** |  | [optional] 
**UpdatedAt** | Pointer to **string** |  | [optional] 

## Methods

### NewModelsAlertRule

`func NewModelsAlertRule() *ModelsAlertRule`

NewModelsAlertRule instantiates a new ModelsAlertRule object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewModelsAlertRuleWithDefaults

`func NewModelsAlertRuleWithDefaults() *ModelsAlertRule`

NewModelsAlertRuleWithDefaults instantiates a new ModelsAlertRule object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetActive

`func (o *ModelsAlertRule) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *ModelsAlertRule) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *ModelsAlertRule) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *ModelsAlertRule) HasActive() bool`

HasActive returns a boolean if a field has been set.

### GetCreatedAt

`func (o *ModelsAlertRule) GetCreatedAt() string`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *ModelsAlertRule) GetCreatedAtOk() (*string, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *ModelsAlertRule) SetCreatedAt(v string)`

SetCreatedAt sets CreatedAt field to given value.

### HasCreatedAt

`func (o *ModelsAlertRule) HasCreatedAt() bool`

HasCreatedAt returns a boolean if a field has been set.

### GetDescription

`func (o *ModelsAlertRule) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ModelsAlertRule) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ModelsAlertRule) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *ModelsAlertRule) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetId

`func (o *ModelsAlertRule) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ModelsAlertRule) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ModelsAlertRule) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *ModelsAlertRule) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *ModelsAlertRule) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ModelsAlertRule) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ModelsAlertRule) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *ModelsAlertRule) HasName() bool`

HasName returns a boolean if a field has been set.

### GetOrganizationId

`func (o *ModelsAlertRule) GetOrganizationId() string`

GetOrganizationId returns the OrganizationId field if non-nil, zero value otherwise.

### GetOrganizationIdOk

`func (o *ModelsAlertRule) GetOrganizationIdOk() (*string, bool)`

GetOrganizationIdOk returns a tuple with the OrganizationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrganizationId

`func (o *ModelsAlertRule) SetOrganizationId(v string)`

SetOrganizationId sets OrganizationId field to given value.

### HasOrganizationId

`func (o *ModelsAlertRule) HasOrganizationId() bool`

HasOrganizationId returns a boolean if a field has been set.

### GetPipelineIds

`func (o *ModelsAlertRule) GetPipelineIds() []string`

GetPipelineIds returns the PipelineIds field if non-nil, zero value otherwise.

### GetPipelineIdsOk

`func (o *ModelsAlertRule) GetPipelineIdsOk() (*[]string, bool)`

GetPipelineIdsOk returns a tuple with the PipelineIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPipelineIds

`func (o *ModelsAlertRule) SetPipelineIds(v []string)`

SetPipelineIds sets PipelineIds field to given value.

### HasPipelineIds

`func (o *ModelsAlertRule) HasPipelineIds() bool`

HasPipelineIds returns a boolean if a field has been set.

### GetRuleConfig

`func (o *ModelsAlertRule) GetRuleConfig() map[string]interface{}`

GetRuleConfig returns the RuleConfig field if non-nil, zero value otherwise.

### GetRuleConfigOk

`func (o *ModelsAlertRule) GetRuleConfigOk() (*map[string]interface{}, bool)`

GetRuleConfigOk returns a tuple with the RuleConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRuleConfig

`func (o *ModelsAlertRule) SetRuleConfig(v map[string]interface{})`

SetRuleConfig sets RuleConfig field to given value.

### HasRuleConfig

`func (o *ModelsAlertRule) HasRuleConfig() bool`

HasRuleConfig returns a boolean if a field has been set.

### GetSeverity

`func (o *ModelsAlertRule) GetSeverity() string`

GetSeverity returns the Severity field if non-nil, zero value otherwise.

### GetSeverityOk

`func (o *ModelsAlertRule) GetSeverityOk() (*string, bool)`

GetSeverityOk returns a tuple with the Severity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSeverity

`func (o *ModelsAlertRule) SetSeverity(v string)`

SetSeverity sets Severity field to given value.

### HasSeverity

`func (o *ModelsAlertRule) HasSeverity() bool`

HasSeverity returns a boolean if a field has been set.

### GetType

`func (o *ModelsAlertRule) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ModelsAlertRule) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ModelsAlertRule) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *ModelsAlertRule) HasType() bool`

HasType returns a boolean if a field has been set.

### GetUpdatedAt

`func (o *ModelsAlertRule) GetUpdatedAt() string`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *ModelsAlertRule) GetUpdatedAtOk() (*string, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *ModelsAlertRule) SetUpdatedAt(v string)`

SetUpdatedAt sets UpdatedAt field to given value.

### HasUpdatedAt

`func (o *ModelsAlertRule) HasUpdatedAt() bool`

HasUpdatedAt returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


