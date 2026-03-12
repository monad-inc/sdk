# GithubComMonadIncCorePkgTypesModelsAlert

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CreatedAt** | Pointer to **int32** |  | [optional] 
**Description** | Pointer to **string** |  | [optional] 
**Id** | Pointer to **string** |  | [optional] 
**Metadata** | Pointer to **interface{}** |  | [optional] 
**Name** | Pointer to **string** |  | [optional] 
**OrganizationId** | Pointer to **string** |  | [optional] 
**Resource** | Pointer to [**GithubComMonadIncCorePkgTypesModelsResourceReference**](GithubComMonadIncCorePkgTypesModelsResourceReference.md) |  | [optional] 
**RuleId** | Pointer to **string** |  | [optional] 
**RuleType** | Pointer to **string** |  | [optional] 
**Severity** | Pointer to **string** |  | [optional] 
**Status** | Pointer to [**GithubComMonadIncCorePkgTypesModelsAlertStatus**](GithubComMonadIncCorePkgTypesModelsAlertStatus.md) |  | [optional] 

## Methods

### NewGithubComMonadIncCorePkgTypesModelsAlert

`func NewGithubComMonadIncCorePkgTypesModelsAlert() *GithubComMonadIncCorePkgTypesModelsAlert`

NewGithubComMonadIncCorePkgTypesModelsAlert instantiates a new GithubComMonadIncCorePkgTypesModelsAlert object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGithubComMonadIncCorePkgTypesModelsAlertWithDefaults

`func NewGithubComMonadIncCorePkgTypesModelsAlertWithDefaults() *GithubComMonadIncCorePkgTypesModelsAlert`

NewGithubComMonadIncCorePkgTypesModelsAlertWithDefaults instantiates a new GithubComMonadIncCorePkgTypesModelsAlert object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCreatedAt

`func (o *GithubComMonadIncCorePkgTypesModelsAlert) GetCreatedAt() int32`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *GithubComMonadIncCorePkgTypesModelsAlert) GetCreatedAtOk() (*int32, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *GithubComMonadIncCorePkgTypesModelsAlert) SetCreatedAt(v int32)`

SetCreatedAt sets CreatedAt field to given value.

### HasCreatedAt

`func (o *GithubComMonadIncCorePkgTypesModelsAlert) HasCreatedAt() bool`

HasCreatedAt returns a boolean if a field has been set.

### GetDescription

`func (o *GithubComMonadIncCorePkgTypesModelsAlert) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *GithubComMonadIncCorePkgTypesModelsAlert) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *GithubComMonadIncCorePkgTypesModelsAlert) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *GithubComMonadIncCorePkgTypesModelsAlert) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetId

`func (o *GithubComMonadIncCorePkgTypesModelsAlert) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *GithubComMonadIncCorePkgTypesModelsAlert) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *GithubComMonadIncCorePkgTypesModelsAlert) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *GithubComMonadIncCorePkgTypesModelsAlert) HasId() bool`

HasId returns a boolean if a field has been set.

### GetMetadata

`func (o *GithubComMonadIncCorePkgTypesModelsAlert) GetMetadata() interface{}`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *GithubComMonadIncCorePkgTypesModelsAlert) GetMetadataOk() (*interface{}, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *GithubComMonadIncCorePkgTypesModelsAlert) SetMetadata(v interface{})`

SetMetadata sets Metadata field to given value.

### HasMetadata

`func (o *GithubComMonadIncCorePkgTypesModelsAlert) HasMetadata() bool`

HasMetadata returns a boolean if a field has been set.

### SetMetadataNil

`func (o *GithubComMonadIncCorePkgTypesModelsAlert) SetMetadataNil(b bool)`

 SetMetadataNil sets the value for Metadata to be an explicit nil

### UnsetMetadata
`func (o *GithubComMonadIncCorePkgTypesModelsAlert) UnsetMetadata()`

UnsetMetadata ensures that no value is present for Metadata, not even an explicit nil
### GetName

`func (o *GithubComMonadIncCorePkgTypesModelsAlert) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *GithubComMonadIncCorePkgTypesModelsAlert) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *GithubComMonadIncCorePkgTypesModelsAlert) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *GithubComMonadIncCorePkgTypesModelsAlert) HasName() bool`

HasName returns a boolean if a field has been set.

### GetOrganizationId

`func (o *GithubComMonadIncCorePkgTypesModelsAlert) GetOrganizationId() string`

GetOrganizationId returns the OrganizationId field if non-nil, zero value otherwise.

### GetOrganizationIdOk

`func (o *GithubComMonadIncCorePkgTypesModelsAlert) GetOrganizationIdOk() (*string, bool)`

GetOrganizationIdOk returns a tuple with the OrganizationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrganizationId

`func (o *GithubComMonadIncCorePkgTypesModelsAlert) SetOrganizationId(v string)`

SetOrganizationId sets OrganizationId field to given value.

### HasOrganizationId

`func (o *GithubComMonadIncCorePkgTypesModelsAlert) HasOrganizationId() bool`

HasOrganizationId returns a boolean if a field has been set.

### GetResource

`func (o *GithubComMonadIncCorePkgTypesModelsAlert) GetResource() GithubComMonadIncCorePkgTypesModelsResourceReference`

GetResource returns the Resource field if non-nil, zero value otherwise.

### GetResourceOk

`func (o *GithubComMonadIncCorePkgTypesModelsAlert) GetResourceOk() (*GithubComMonadIncCorePkgTypesModelsResourceReference, bool)`

GetResourceOk returns a tuple with the Resource field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResource

`func (o *GithubComMonadIncCorePkgTypesModelsAlert) SetResource(v GithubComMonadIncCorePkgTypesModelsResourceReference)`

SetResource sets Resource field to given value.

### HasResource

`func (o *GithubComMonadIncCorePkgTypesModelsAlert) HasResource() bool`

HasResource returns a boolean if a field has been set.

### GetRuleId

`func (o *GithubComMonadIncCorePkgTypesModelsAlert) GetRuleId() string`

GetRuleId returns the RuleId field if non-nil, zero value otherwise.

### GetRuleIdOk

`func (o *GithubComMonadIncCorePkgTypesModelsAlert) GetRuleIdOk() (*string, bool)`

GetRuleIdOk returns a tuple with the RuleId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRuleId

`func (o *GithubComMonadIncCorePkgTypesModelsAlert) SetRuleId(v string)`

SetRuleId sets RuleId field to given value.

### HasRuleId

`func (o *GithubComMonadIncCorePkgTypesModelsAlert) HasRuleId() bool`

HasRuleId returns a boolean if a field has been set.

### GetRuleType

`func (o *GithubComMonadIncCorePkgTypesModelsAlert) GetRuleType() string`

GetRuleType returns the RuleType field if non-nil, zero value otherwise.

### GetRuleTypeOk

`func (o *GithubComMonadIncCorePkgTypesModelsAlert) GetRuleTypeOk() (*string, bool)`

GetRuleTypeOk returns a tuple with the RuleType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRuleType

`func (o *GithubComMonadIncCorePkgTypesModelsAlert) SetRuleType(v string)`

SetRuleType sets RuleType field to given value.

### HasRuleType

`func (o *GithubComMonadIncCorePkgTypesModelsAlert) HasRuleType() bool`

HasRuleType returns a boolean if a field has been set.

### GetSeverity

`func (o *GithubComMonadIncCorePkgTypesModelsAlert) GetSeverity() string`

GetSeverity returns the Severity field if non-nil, zero value otherwise.

### GetSeverityOk

`func (o *GithubComMonadIncCorePkgTypesModelsAlert) GetSeverityOk() (*string, bool)`

GetSeverityOk returns a tuple with the Severity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSeverity

`func (o *GithubComMonadIncCorePkgTypesModelsAlert) SetSeverity(v string)`

SetSeverity sets Severity field to given value.

### HasSeverity

`func (o *GithubComMonadIncCorePkgTypesModelsAlert) HasSeverity() bool`

HasSeverity returns a boolean if a field has been set.

### GetStatus

`func (o *GithubComMonadIncCorePkgTypesModelsAlert) GetStatus() GithubComMonadIncCorePkgTypesModelsAlertStatus`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *GithubComMonadIncCorePkgTypesModelsAlert) GetStatusOk() (*GithubComMonadIncCorePkgTypesModelsAlertStatus, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *GithubComMonadIncCorePkgTypesModelsAlert) SetStatus(v GithubComMonadIncCorePkgTypesModelsAlertStatus)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *GithubComMonadIncCorePkgTypesModelsAlert) HasStatus() bool`

HasStatus returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


