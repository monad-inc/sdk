# ModelsAlert

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CreatedAt** | Pointer to **int32** | incident start (frozen across re-fires) | [optional] 
**Description** | Pointer to **string** |  | [optional] 
**FiredAt** | Pointer to **int32** | this emission&#39;s fire time; differs per re-fire | [optional] 
**Id** | Pointer to **string** |  | [optional] 
**Metadata** | Pointer to **interface{}** |  | [optional] 
**Name** | Pointer to **string** |  | [optional] 
**OrganizationId** | Pointer to **string** |  | [optional] 
**Resource** | Pointer to [**ModelsResourceReference**](ModelsResourceReference.md) |  | [optional] 
**RuleId** | Pointer to **string** |  | [optional] 
**RuleType** | Pointer to **string** |  | [optional] 
**Severity** | Pointer to **string** |  | [optional] 
**Status** | Pointer to [**ModelsAlertStatus**](ModelsAlertStatus.md) |  | [optional] 

## Methods

### NewModelsAlert

`func NewModelsAlert() *ModelsAlert`

NewModelsAlert instantiates a new ModelsAlert object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewModelsAlertWithDefaults

`func NewModelsAlertWithDefaults() *ModelsAlert`

NewModelsAlertWithDefaults instantiates a new ModelsAlert object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCreatedAt

`func (o *ModelsAlert) GetCreatedAt() int32`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *ModelsAlert) GetCreatedAtOk() (*int32, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *ModelsAlert) SetCreatedAt(v int32)`

SetCreatedAt sets CreatedAt field to given value.

### HasCreatedAt

`func (o *ModelsAlert) HasCreatedAt() bool`

HasCreatedAt returns a boolean if a field has been set.

### GetDescription

`func (o *ModelsAlert) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ModelsAlert) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ModelsAlert) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *ModelsAlert) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetFiredAt

`func (o *ModelsAlert) GetFiredAt() int32`

GetFiredAt returns the FiredAt field if non-nil, zero value otherwise.

### GetFiredAtOk

`func (o *ModelsAlert) GetFiredAtOk() (*int32, bool)`

GetFiredAtOk returns a tuple with the FiredAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFiredAt

`func (o *ModelsAlert) SetFiredAt(v int32)`

SetFiredAt sets FiredAt field to given value.

### HasFiredAt

`func (o *ModelsAlert) HasFiredAt() bool`

HasFiredAt returns a boolean if a field has been set.

### GetId

`func (o *ModelsAlert) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ModelsAlert) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ModelsAlert) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *ModelsAlert) HasId() bool`

HasId returns a boolean if a field has been set.

### GetMetadata

`func (o *ModelsAlert) GetMetadata() interface{}`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *ModelsAlert) GetMetadataOk() (*interface{}, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *ModelsAlert) SetMetadata(v interface{})`

SetMetadata sets Metadata field to given value.

### HasMetadata

`func (o *ModelsAlert) HasMetadata() bool`

HasMetadata returns a boolean if a field has been set.

### SetMetadataNil

`func (o *ModelsAlert) SetMetadataNil(b bool)`

 SetMetadataNil sets the value for Metadata to be an explicit nil

### UnsetMetadata
`func (o *ModelsAlert) UnsetMetadata()`

UnsetMetadata ensures that no value is present for Metadata, not even an explicit nil
### GetName

`func (o *ModelsAlert) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ModelsAlert) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ModelsAlert) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *ModelsAlert) HasName() bool`

HasName returns a boolean if a field has been set.

### GetOrganizationId

`func (o *ModelsAlert) GetOrganizationId() string`

GetOrganizationId returns the OrganizationId field if non-nil, zero value otherwise.

### GetOrganizationIdOk

`func (o *ModelsAlert) GetOrganizationIdOk() (*string, bool)`

GetOrganizationIdOk returns a tuple with the OrganizationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrganizationId

`func (o *ModelsAlert) SetOrganizationId(v string)`

SetOrganizationId sets OrganizationId field to given value.

### HasOrganizationId

`func (o *ModelsAlert) HasOrganizationId() bool`

HasOrganizationId returns a boolean if a field has been set.

### GetResource

`func (o *ModelsAlert) GetResource() ModelsResourceReference`

GetResource returns the Resource field if non-nil, zero value otherwise.

### GetResourceOk

`func (o *ModelsAlert) GetResourceOk() (*ModelsResourceReference, bool)`

GetResourceOk returns a tuple with the Resource field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResource

`func (o *ModelsAlert) SetResource(v ModelsResourceReference)`

SetResource sets Resource field to given value.

### HasResource

`func (o *ModelsAlert) HasResource() bool`

HasResource returns a boolean if a field has been set.

### GetRuleId

`func (o *ModelsAlert) GetRuleId() string`

GetRuleId returns the RuleId field if non-nil, zero value otherwise.

### GetRuleIdOk

`func (o *ModelsAlert) GetRuleIdOk() (*string, bool)`

GetRuleIdOk returns a tuple with the RuleId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRuleId

`func (o *ModelsAlert) SetRuleId(v string)`

SetRuleId sets RuleId field to given value.

### HasRuleId

`func (o *ModelsAlert) HasRuleId() bool`

HasRuleId returns a boolean if a field has been set.

### GetRuleType

`func (o *ModelsAlert) GetRuleType() string`

GetRuleType returns the RuleType field if non-nil, zero value otherwise.

### GetRuleTypeOk

`func (o *ModelsAlert) GetRuleTypeOk() (*string, bool)`

GetRuleTypeOk returns a tuple with the RuleType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRuleType

`func (o *ModelsAlert) SetRuleType(v string)`

SetRuleType sets RuleType field to given value.

### HasRuleType

`func (o *ModelsAlert) HasRuleType() bool`

HasRuleType returns a boolean if a field has been set.

### GetSeverity

`func (o *ModelsAlert) GetSeverity() string`

GetSeverity returns the Severity field if non-nil, zero value otherwise.

### GetSeverityOk

`func (o *ModelsAlert) GetSeverityOk() (*string, bool)`

GetSeverityOk returns a tuple with the Severity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSeverity

`func (o *ModelsAlert) SetSeverity(v string)`

SetSeverity sets Severity field to given value.

### HasSeverity

`func (o *ModelsAlert) HasSeverity() bool`

HasSeverity returns a boolean if a field has been set.

### GetStatus

`func (o *ModelsAlert) GetStatus() ModelsAlertStatus`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *ModelsAlert) GetStatusOk() (*ModelsAlertStatus, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *ModelsAlert) SetStatus(v ModelsAlertStatus)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *ModelsAlert) HasStatus() bool`

HasStatus returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


