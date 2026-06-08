# ModelsOrganizationAuditLog

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Action** | Pointer to [**ModelsAuditAction**](ModelsAuditAction.md) |  | [optional] 
**Actor** | Pointer to [**ModelsAPILogActor**](ModelsAPILogActor.md) |  | [optional] 
**Id** | Pointer to **string** |  | [optional] 
**OccurredAt** | Pointer to **string** |  | [optional] 
**OrganizationId** | Pointer to **string** |  | [optional] 
**RequestId** | Pointer to **string** |  | [optional] 
**Resource** | Pointer to [**GithubComMonadIncCorePkgTypesModelsAuditResource**](GithubComMonadIncCorePkgTypesModelsAuditResource.md) |  | [optional] 

## Methods

### NewModelsOrganizationAuditLog

`func NewModelsOrganizationAuditLog() *ModelsOrganizationAuditLog`

NewModelsOrganizationAuditLog instantiates a new ModelsOrganizationAuditLog object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewModelsOrganizationAuditLogWithDefaults

`func NewModelsOrganizationAuditLogWithDefaults() *ModelsOrganizationAuditLog`

NewModelsOrganizationAuditLogWithDefaults instantiates a new ModelsOrganizationAuditLog object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAction

`func (o *ModelsOrganizationAuditLog) GetAction() ModelsAuditAction`

GetAction returns the Action field if non-nil, zero value otherwise.

### GetActionOk

`func (o *ModelsOrganizationAuditLog) GetActionOk() (*ModelsAuditAction, bool)`

GetActionOk returns a tuple with the Action field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAction

`func (o *ModelsOrganizationAuditLog) SetAction(v ModelsAuditAction)`

SetAction sets Action field to given value.

### HasAction

`func (o *ModelsOrganizationAuditLog) HasAction() bool`

HasAction returns a boolean if a field has been set.

### GetActor

`func (o *ModelsOrganizationAuditLog) GetActor() ModelsAPILogActor`

GetActor returns the Actor field if non-nil, zero value otherwise.

### GetActorOk

`func (o *ModelsOrganizationAuditLog) GetActorOk() (*ModelsAPILogActor, bool)`

GetActorOk returns a tuple with the Actor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActor

`func (o *ModelsOrganizationAuditLog) SetActor(v ModelsAPILogActor)`

SetActor sets Actor field to given value.

### HasActor

`func (o *ModelsOrganizationAuditLog) HasActor() bool`

HasActor returns a boolean if a field has been set.

### GetId

`func (o *ModelsOrganizationAuditLog) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ModelsOrganizationAuditLog) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ModelsOrganizationAuditLog) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *ModelsOrganizationAuditLog) HasId() bool`

HasId returns a boolean if a field has been set.

### GetOccurredAt

`func (o *ModelsOrganizationAuditLog) GetOccurredAt() string`

GetOccurredAt returns the OccurredAt field if non-nil, zero value otherwise.

### GetOccurredAtOk

`func (o *ModelsOrganizationAuditLog) GetOccurredAtOk() (*string, bool)`

GetOccurredAtOk returns a tuple with the OccurredAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOccurredAt

`func (o *ModelsOrganizationAuditLog) SetOccurredAt(v string)`

SetOccurredAt sets OccurredAt field to given value.

### HasOccurredAt

`func (o *ModelsOrganizationAuditLog) HasOccurredAt() bool`

HasOccurredAt returns a boolean if a field has been set.

### GetOrganizationId

`func (o *ModelsOrganizationAuditLog) GetOrganizationId() string`

GetOrganizationId returns the OrganizationId field if non-nil, zero value otherwise.

### GetOrganizationIdOk

`func (o *ModelsOrganizationAuditLog) GetOrganizationIdOk() (*string, bool)`

GetOrganizationIdOk returns a tuple with the OrganizationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrganizationId

`func (o *ModelsOrganizationAuditLog) SetOrganizationId(v string)`

SetOrganizationId sets OrganizationId field to given value.

### HasOrganizationId

`func (o *ModelsOrganizationAuditLog) HasOrganizationId() bool`

HasOrganizationId returns a boolean if a field has been set.

### GetRequestId

`func (o *ModelsOrganizationAuditLog) GetRequestId() string`

GetRequestId returns the RequestId field if non-nil, zero value otherwise.

### GetRequestIdOk

`func (o *ModelsOrganizationAuditLog) GetRequestIdOk() (*string, bool)`

GetRequestIdOk returns a tuple with the RequestId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestId

`func (o *ModelsOrganizationAuditLog) SetRequestId(v string)`

SetRequestId sets RequestId field to given value.

### HasRequestId

`func (o *ModelsOrganizationAuditLog) HasRequestId() bool`

HasRequestId returns a boolean if a field has been set.

### GetResource

`func (o *ModelsOrganizationAuditLog) GetResource() GithubComMonadIncCorePkgTypesModelsAuditResource`

GetResource returns the Resource field if non-nil, zero value otherwise.

### GetResourceOk

`func (o *ModelsOrganizationAuditLog) GetResourceOk() (*GithubComMonadIncCorePkgTypesModelsAuditResource, bool)`

GetResourceOk returns a tuple with the Resource field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResource

`func (o *ModelsOrganizationAuditLog) SetResource(v GithubComMonadIncCorePkgTypesModelsAuditResource)`

SetResource sets Resource field to given value.

### HasResource

`func (o *ModelsOrganizationAuditLog) HasResource() bool`

HasResource returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


