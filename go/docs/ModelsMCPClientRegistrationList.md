# ModelsMCPClientRegistrationList

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Pagination** | Pointer to [**ModelsPagination**](ModelsPagination.md) |  | [optional] 
**Registrations** | Pointer to [**[]ModelsMCPClientRegistration**](ModelsMCPClientRegistration.md) |  | [optional] 

## Methods

### NewModelsMCPClientRegistrationList

`func NewModelsMCPClientRegistrationList() *ModelsMCPClientRegistrationList`

NewModelsMCPClientRegistrationList instantiates a new ModelsMCPClientRegistrationList object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewModelsMCPClientRegistrationListWithDefaults

`func NewModelsMCPClientRegistrationListWithDefaults() *ModelsMCPClientRegistrationList`

NewModelsMCPClientRegistrationListWithDefaults instantiates a new ModelsMCPClientRegistrationList object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPagination

`func (o *ModelsMCPClientRegistrationList) GetPagination() ModelsPagination`

GetPagination returns the Pagination field if non-nil, zero value otherwise.

### GetPaginationOk

`func (o *ModelsMCPClientRegistrationList) GetPaginationOk() (*ModelsPagination, bool)`

GetPaginationOk returns a tuple with the Pagination field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPagination

`func (o *ModelsMCPClientRegistrationList) SetPagination(v ModelsPagination)`

SetPagination sets Pagination field to given value.

### HasPagination

`func (o *ModelsMCPClientRegistrationList) HasPagination() bool`

HasPagination returns a boolean if a field has been set.

### GetRegistrations

`func (o *ModelsMCPClientRegistrationList) GetRegistrations() []ModelsMCPClientRegistration`

GetRegistrations returns the Registrations field if non-nil, zero value otherwise.

### GetRegistrationsOk

`func (o *ModelsMCPClientRegistrationList) GetRegistrationsOk() (*[]ModelsMCPClientRegistration, bool)`

GetRegistrationsOk returns a tuple with the Registrations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRegistrations

`func (o *ModelsMCPClientRegistrationList) SetRegistrations(v []ModelsMCPClientRegistration)`

SetRegistrations sets Registrations field to given value.

### HasRegistrations

`func (o *ModelsMCPClientRegistrationList) HasRegistrations() bool`

HasRegistrations returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


