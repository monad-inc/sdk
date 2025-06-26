# RoutesV3GetFeatureFlagResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Organizations** | Pointer to [**map[string][]FlagsmithFlag**](array.md) |  | [optional] 
**User** | Pointer to [**[]FlagsmithFlag**](FlagsmithFlag.md) |  | [optional] 

## Methods

### NewRoutesV3GetFeatureFlagResponse

`func NewRoutesV3GetFeatureFlagResponse() *RoutesV3GetFeatureFlagResponse`

NewRoutesV3GetFeatureFlagResponse instantiates a new RoutesV3GetFeatureFlagResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoutesV3GetFeatureFlagResponseWithDefaults

`func NewRoutesV3GetFeatureFlagResponseWithDefaults() *RoutesV3GetFeatureFlagResponse`

NewRoutesV3GetFeatureFlagResponseWithDefaults instantiates a new RoutesV3GetFeatureFlagResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOrganizations

`func (o *RoutesV3GetFeatureFlagResponse) GetOrganizations() map[string][]FlagsmithFlag`

GetOrganizations returns the Organizations field if non-nil, zero value otherwise.

### GetOrganizationsOk

`func (o *RoutesV3GetFeatureFlagResponse) GetOrganizationsOk() (*map[string][]FlagsmithFlag, bool)`

GetOrganizationsOk returns a tuple with the Organizations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrganizations

`func (o *RoutesV3GetFeatureFlagResponse) SetOrganizations(v map[string][]FlagsmithFlag)`

SetOrganizations sets Organizations field to given value.

### HasOrganizations

`func (o *RoutesV3GetFeatureFlagResponse) HasOrganizations() bool`

HasOrganizations returns a boolean if a field has been set.

### GetUser

`func (o *RoutesV3GetFeatureFlagResponse) GetUser() []FlagsmithFlag`

GetUser returns the User field if non-nil, zero value otherwise.

### GetUserOk

`func (o *RoutesV3GetFeatureFlagResponse) GetUserOk() (*[]FlagsmithFlag, bool)`

GetUserOk returns a tuple with the User field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUser

`func (o *RoutesV3GetFeatureFlagResponse) SetUser(v []FlagsmithFlag)`

SetUser sets User field to given value.

### HasUser

`func (o *RoutesV3GetFeatureFlagResponse) HasUser() bool`

HasUser returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


