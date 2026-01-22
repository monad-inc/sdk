# GeolocusSettingsConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DestinationPath** | Pointer to **string** | DestinationPath is the path where Geolocus results will be added to each record | [optional] 
**IpAddressPath** | Pointer to **string** | IPAddressPath is the path to a field containing an IP address to look up | [optional] 
**NoMatchResponse** | Pointer to **string** | NoMatchResponse is the value to add when no match is found | [optional] 

## Methods

### NewGeolocusSettingsConfig

`func NewGeolocusSettingsConfig() *GeolocusSettingsConfig`

NewGeolocusSettingsConfig instantiates a new GeolocusSettingsConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGeolocusSettingsConfigWithDefaults

`func NewGeolocusSettingsConfigWithDefaults() *GeolocusSettingsConfig`

NewGeolocusSettingsConfigWithDefaults instantiates a new GeolocusSettingsConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDestinationPath

`func (o *GeolocusSettingsConfig) GetDestinationPath() string`

GetDestinationPath returns the DestinationPath field if non-nil, zero value otherwise.

### GetDestinationPathOk

`func (o *GeolocusSettingsConfig) GetDestinationPathOk() (*string, bool)`

GetDestinationPathOk returns a tuple with the DestinationPath field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDestinationPath

`func (o *GeolocusSettingsConfig) SetDestinationPath(v string)`

SetDestinationPath sets DestinationPath field to given value.

### HasDestinationPath

`func (o *GeolocusSettingsConfig) HasDestinationPath() bool`

HasDestinationPath returns a boolean if a field has been set.

### GetIpAddressPath

`func (o *GeolocusSettingsConfig) GetIpAddressPath() string`

GetIpAddressPath returns the IpAddressPath field if non-nil, zero value otherwise.

### GetIpAddressPathOk

`func (o *GeolocusSettingsConfig) GetIpAddressPathOk() (*string, bool)`

GetIpAddressPathOk returns a tuple with the IpAddressPath field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIpAddressPath

`func (o *GeolocusSettingsConfig) SetIpAddressPath(v string)`

SetIpAddressPath sets IpAddressPath field to given value.

### HasIpAddressPath

`func (o *GeolocusSettingsConfig) HasIpAddressPath() bool`

HasIpAddressPath returns a boolean if a field has been set.

### GetNoMatchResponse

`func (o *GeolocusSettingsConfig) GetNoMatchResponse() string`

GetNoMatchResponse returns the NoMatchResponse field if non-nil, zero value otherwise.

### GetNoMatchResponseOk

`func (o *GeolocusSettingsConfig) GetNoMatchResponseOk() (*string, bool)`

GetNoMatchResponseOk returns a tuple with the NoMatchResponse field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNoMatchResponse

`func (o *GeolocusSettingsConfig) SetNoMatchResponse(v string)`

SetNoMatchResponse sets NoMatchResponse field to given value.

### HasNoMatchResponse

`func (o *GeolocusSettingsConfig) HasNoMatchResponse() bool`

HasNoMatchResponse returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


