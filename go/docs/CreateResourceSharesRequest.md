# CreateResourceSharesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AllCurrentChildren** | Pointer to **bool** | Share with every current direct child (future children excluded). | [optional] 
**RevokeAllNotInUse** | Pointer to **bool** | Revoke every current share the target org is not using, leaving in-use shares in place (returned in skipped_in_use). Unlike revoke_organization_ids this never 409s on an in-use child — it skips it. | [optional] 
**RevokeOrganizationIds** | Pointer to **[]string** | Target organization ids whose share of this resource should be revoked. | [optional] 
**ShareOrganizationIds** | Pointer to **[]string** | Explicit direct-child organizations to share with. | [optional] 
**ShareWithAllNewChildren** | Pointer to **bool** | Toggle auto-sharing with new direct children: omit to leave unchanged, true to enable, false to disable. | [optional] 

## Methods

### NewCreateResourceSharesRequest

`func NewCreateResourceSharesRequest() *CreateResourceSharesRequest`

NewCreateResourceSharesRequest instantiates a new CreateResourceSharesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateResourceSharesRequestWithDefaults

`func NewCreateResourceSharesRequestWithDefaults() *CreateResourceSharesRequest`

NewCreateResourceSharesRequestWithDefaults instantiates a new CreateResourceSharesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAllCurrentChildren

`func (o *CreateResourceSharesRequest) GetAllCurrentChildren() bool`

GetAllCurrentChildren returns the AllCurrentChildren field if non-nil, zero value otherwise.

### GetAllCurrentChildrenOk

`func (o *CreateResourceSharesRequest) GetAllCurrentChildrenOk() (*bool, bool)`

GetAllCurrentChildrenOk returns a tuple with the AllCurrentChildren field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllCurrentChildren

`func (o *CreateResourceSharesRequest) SetAllCurrentChildren(v bool)`

SetAllCurrentChildren sets AllCurrentChildren field to given value.

### HasAllCurrentChildren

`func (o *CreateResourceSharesRequest) HasAllCurrentChildren() bool`

HasAllCurrentChildren returns a boolean if a field has been set.

### GetRevokeAllNotInUse

`func (o *CreateResourceSharesRequest) GetRevokeAllNotInUse() bool`

GetRevokeAllNotInUse returns the RevokeAllNotInUse field if non-nil, zero value otherwise.

### GetRevokeAllNotInUseOk

`func (o *CreateResourceSharesRequest) GetRevokeAllNotInUseOk() (*bool, bool)`

GetRevokeAllNotInUseOk returns a tuple with the RevokeAllNotInUse field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevokeAllNotInUse

`func (o *CreateResourceSharesRequest) SetRevokeAllNotInUse(v bool)`

SetRevokeAllNotInUse sets RevokeAllNotInUse field to given value.

### HasRevokeAllNotInUse

`func (o *CreateResourceSharesRequest) HasRevokeAllNotInUse() bool`

HasRevokeAllNotInUse returns a boolean if a field has been set.

### GetRevokeOrganizationIds

`func (o *CreateResourceSharesRequest) GetRevokeOrganizationIds() []string`

GetRevokeOrganizationIds returns the RevokeOrganizationIds field if non-nil, zero value otherwise.

### GetRevokeOrganizationIdsOk

`func (o *CreateResourceSharesRequest) GetRevokeOrganizationIdsOk() (*[]string, bool)`

GetRevokeOrganizationIdsOk returns a tuple with the RevokeOrganizationIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevokeOrganizationIds

`func (o *CreateResourceSharesRequest) SetRevokeOrganizationIds(v []string)`

SetRevokeOrganizationIds sets RevokeOrganizationIds field to given value.

### HasRevokeOrganizationIds

`func (o *CreateResourceSharesRequest) HasRevokeOrganizationIds() bool`

HasRevokeOrganizationIds returns a boolean if a field has been set.

### GetShareOrganizationIds

`func (o *CreateResourceSharesRequest) GetShareOrganizationIds() []string`

GetShareOrganizationIds returns the ShareOrganizationIds field if non-nil, zero value otherwise.

### GetShareOrganizationIdsOk

`func (o *CreateResourceSharesRequest) GetShareOrganizationIdsOk() (*[]string, bool)`

GetShareOrganizationIdsOk returns a tuple with the ShareOrganizationIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShareOrganizationIds

`func (o *CreateResourceSharesRequest) SetShareOrganizationIds(v []string)`

SetShareOrganizationIds sets ShareOrganizationIds field to given value.

### HasShareOrganizationIds

`func (o *CreateResourceSharesRequest) HasShareOrganizationIds() bool`

HasShareOrganizationIds returns a boolean if a field has been set.

### GetShareWithAllNewChildren

`func (o *CreateResourceSharesRequest) GetShareWithAllNewChildren() bool`

GetShareWithAllNewChildren returns the ShareWithAllNewChildren field if non-nil, zero value otherwise.

### GetShareWithAllNewChildrenOk

`func (o *CreateResourceSharesRequest) GetShareWithAllNewChildrenOk() (*bool, bool)`

GetShareWithAllNewChildrenOk returns a tuple with the ShareWithAllNewChildren field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShareWithAllNewChildren

`func (o *CreateResourceSharesRequest) SetShareWithAllNewChildren(v bool)`

SetShareWithAllNewChildren sets ShareWithAllNewChildren field to given value.

### HasShareWithAllNewChildren

`func (o *CreateResourceSharesRequest) HasShareWithAllNewChildren() bool`

HasShareWithAllNewChildren returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


