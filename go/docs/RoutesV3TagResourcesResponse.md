# RoutesV3TagResourcesResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Pagination** | Pointer to [**ModelsPagination**](ModelsPagination.md) |  | [optional] 
**Resources** | Pointer to [**[]DatastoreTaggedResource**](DatastoreTaggedResource.md) |  | [optional] 

## Methods

### NewRoutesV3TagResourcesResponse

`func NewRoutesV3TagResourcesResponse() *RoutesV3TagResourcesResponse`

NewRoutesV3TagResourcesResponse instantiates a new RoutesV3TagResourcesResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoutesV3TagResourcesResponseWithDefaults

`func NewRoutesV3TagResourcesResponseWithDefaults() *RoutesV3TagResourcesResponse`

NewRoutesV3TagResourcesResponseWithDefaults instantiates a new RoutesV3TagResourcesResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPagination

`func (o *RoutesV3TagResourcesResponse) GetPagination() ModelsPagination`

GetPagination returns the Pagination field if non-nil, zero value otherwise.

### GetPaginationOk

`func (o *RoutesV3TagResourcesResponse) GetPaginationOk() (*ModelsPagination, bool)`

GetPaginationOk returns a tuple with the Pagination field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPagination

`func (o *RoutesV3TagResourcesResponse) SetPagination(v ModelsPagination)`

SetPagination sets Pagination field to given value.

### HasPagination

`func (o *RoutesV3TagResourcesResponse) HasPagination() bool`

HasPagination returns a boolean if a field has been set.

### GetResources

`func (o *RoutesV3TagResourcesResponse) GetResources() []DatastoreTaggedResource`

GetResources returns the Resources field if non-nil, zero value otherwise.

### GetResourcesOk

`func (o *RoutesV3TagResourcesResponse) GetResourcesOk() (*[]DatastoreTaggedResource, bool)`

GetResourcesOk returns a tuple with the Resources field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResources

`func (o *RoutesV3TagResourcesResponse) SetResources(v []DatastoreTaggedResource)`

SetResources sets Resources field to given value.

### HasResources

`func (o *RoutesV3TagResourcesResponse) HasResources() bool`

HasResources returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


