# OrganizationsSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ChildType** | Pointer to **string** | Specifies whether to list AWS accounts or organizational units (OUs) as children of the parent entity. | [optional] 
**Cron** | Pointer to **string** | Cron expression for scheduling the input | [optional] 
**ParentId** | Pointer to **string** | Parent ID to list children for | [optional] 
**Region** | Pointer to **string** | AWS region to use | [optional] 
**RoleArn** | Pointer to **string** | Role ARN to assume | [optional] 
**UseSyntheticData** | Pointer to **bool** | Generate synthetic demo data instead of connecting to the real data source. | [optional] 

## Methods

### NewOrganizationsSettingsConfig

`func NewOrganizationsSettingsConfig() *OrganizationsSettingsConfig`

NewOrganizationsSettingsConfig instantiates a new OrganizationsSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOrganizationsSettingsConfigWithDefaults

`func NewOrganizationsSettingsConfigWithDefaults() *OrganizationsSettingsConfig`

NewOrganizationsSettingsConfigWithDefaults instantiates a new OrganizationsSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetChildType

`func (o *OrganizationsSettingsConfig) GetChildType() string`

GetChildType returns the ChildType field if non-nil, zero value otherwise.

### GetChildTypeOk

`func (o *OrganizationsSettingsConfig) GetChildTypeOk() (*string, bool)`

GetChildTypeOk returns a tuple with the ChildType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChildType

`func (o *OrganizationsSettingsConfig) SetChildType(v string)`

SetChildType sets ChildType field to given value.

### HasChildType

`func (o *OrganizationsSettingsConfig) HasChildType() bool`

HasChildType returns a boolean if a field has been set.

### GetCron

`func (o *OrganizationsSettingsConfig) GetCron() string`

GetCron returns the Cron field if non-nil, zero value otherwise.

### GetCronOk

`func (o *OrganizationsSettingsConfig) GetCronOk() (*string, bool)`

GetCronOk returns a tuple with the Cron field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCron

`func (o *OrganizationsSettingsConfig) SetCron(v string)`

SetCron sets Cron field to given value.

### HasCron

`func (o *OrganizationsSettingsConfig) HasCron() bool`

HasCron returns a boolean if a field has been set.

### GetParentId

`func (o *OrganizationsSettingsConfig) GetParentId() string`

GetParentId returns the ParentId field if non-nil, zero value otherwise.

### GetParentIdOk

`func (o *OrganizationsSettingsConfig) GetParentIdOk() (*string, bool)`

GetParentIdOk returns a tuple with the ParentId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetParentId

`func (o *OrganizationsSettingsConfig) SetParentId(v string)`

SetParentId sets ParentId field to given value.

### HasParentId

`func (o *OrganizationsSettingsConfig) HasParentId() bool`

HasParentId returns a boolean if a field has been set.

### GetRegion

`func (o *OrganizationsSettingsConfig) GetRegion() string`

GetRegion returns the Region field if non-nil, zero value otherwise.

### GetRegionOk

`func (o *OrganizationsSettingsConfig) GetRegionOk() (*string, bool)`

GetRegionOk returns a tuple with the Region field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRegion

`func (o *OrganizationsSettingsConfig) SetRegion(v string)`

SetRegion sets Region field to given value.

### HasRegion

`func (o *OrganizationsSettingsConfig) HasRegion() bool`

HasRegion returns a boolean if a field has been set.

### GetRoleArn

`func (o *OrganizationsSettingsConfig) GetRoleArn() string`

GetRoleArn returns the RoleArn field if non-nil, zero value otherwise.

### GetRoleArnOk

`func (o *OrganizationsSettingsConfig) GetRoleArnOk() (*string, bool)`

GetRoleArnOk returns a tuple with the RoleArn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoleArn

`func (o *OrganizationsSettingsConfig) SetRoleArn(v string)`

SetRoleArn sets RoleArn field to given value.

### HasRoleArn

`func (o *OrganizationsSettingsConfig) HasRoleArn() bool`

HasRoleArn returns a boolean if a field has been set.

### GetUseSyntheticData

`func (o *OrganizationsSettingsConfig) GetUseSyntheticData() bool`

GetUseSyntheticData returns the UseSyntheticData field if non-nil, zero value otherwise.

### GetUseSyntheticDataOk

`func (o *OrganizationsSettingsConfig) GetUseSyntheticDataOk() (*bool, bool)`

GetUseSyntheticDataOk returns a tuple with the UseSyntheticData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUseSyntheticData

`func (o *OrganizationsSettingsConfig) SetUseSyntheticData(v bool)`

SetUseSyntheticData sets UseSyntheticData field to given value.

### HasUseSyntheticData

`func (o *OrganizationsSettingsConfig) HasUseSyntheticData() bool`

HasUseSyntheticData returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


