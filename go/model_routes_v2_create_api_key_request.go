/*
Monad API

This is the monad API

API version: 1.0
Contact: support@swagger.io
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package monad

import (
	"encoding/json"
	"bytes"
	"fmt"
)

// checks if the RoutesV2CreateAPIKeyRequest type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RoutesV2CreateAPIKeyRequest{}

// RoutesV2CreateAPIKeyRequest struct for RoutesV2CreateAPIKeyRequest
type RoutesV2CreateAPIKeyRequest struct {
	Description *string `json:"description,omitempty"`
	ExpirationTime string `json:"expiration_time"`
	Name string `json:"name"`
	RoleId string `json:"role_id"`
}

type _RoutesV2CreateAPIKeyRequest RoutesV2CreateAPIKeyRequest

// NewRoutesV2CreateAPIKeyRequest instantiates a new RoutesV2CreateAPIKeyRequest object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRoutesV2CreateAPIKeyRequest(expirationTime string, name string, roleId string) *RoutesV2CreateAPIKeyRequest {
	this := RoutesV2CreateAPIKeyRequest{}
	this.ExpirationTime = expirationTime
	this.Name = name
	this.RoleId = roleId
	return &this
}

// NewRoutesV2CreateAPIKeyRequestWithDefaults instantiates a new RoutesV2CreateAPIKeyRequest object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRoutesV2CreateAPIKeyRequestWithDefaults() *RoutesV2CreateAPIKeyRequest {
	this := RoutesV2CreateAPIKeyRequest{}
	return &this
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *RoutesV2CreateAPIKeyRequest) GetDescription() string {
	if o == nil || IsNil(o.Description) {
		var ret string
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RoutesV2CreateAPIKeyRequest) GetDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *RoutesV2CreateAPIKeyRequest) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given string and assigns it to the Description field.
func (o *RoutesV2CreateAPIKeyRequest) SetDescription(v string) {
	o.Description = &v
}

// GetExpirationTime returns the ExpirationTime field value
func (o *RoutesV2CreateAPIKeyRequest) GetExpirationTime() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.ExpirationTime
}

// GetExpirationTimeOk returns a tuple with the ExpirationTime field value
// and a boolean to check if the value has been set.
func (o *RoutesV2CreateAPIKeyRequest) GetExpirationTimeOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.ExpirationTime, true
}

// SetExpirationTime sets field value
func (o *RoutesV2CreateAPIKeyRequest) SetExpirationTime(v string) {
	o.ExpirationTime = v
}

// GetName returns the Name field value
func (o *RoutesV2CreateAPIKeyRequest) GetName() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Name
}

// GetNameOk returns a tuple with the Name field value
// and a boolean to check if the value has been set.
func (o *RoutesV2CreateAPIKeyRequest) GetNameOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Name, true
}

// SetName sets field value
func (o *RoutesV2CreateAPIKeyRequest) SetName(v string) {
	o.Name = v
}

// GetRoleId returns the RoleId field value
func (o *RoutesV2CreateAPIKeyRequest) GetRoleId() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.RoleId
}

// GetRoleIdOk returns a tuple with the RoleId field value
// and a boolean to check if the value has been set.
func (o *RoutesV2CreateAPIKeyRequest) GetRoleIdOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.RoleId, true
}

// SetRoleId sets field value
func (o *RoutesV2CreateAPIKeyRequest) SetRoleId(v string) {
	o.RoleId = v
}

func (o RoutesV2CreateAPIKeyRequest) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RoutesV2CreateAPIKeyRequest) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Description) {
		toSerialize["description"] = o.Description
	}
	toSerialize["expiration_time"] = o.ExpirationTime
	toSerialize["name"] = o.Name
	toSerialize["role_id"] = o.RoleId
	return toSerialize, nil
}

func (o *RoutesV2CreateAPIKeyRequest) UnmarshalJSON(data []byte) (err error) {
	// This validates that all required properties are included in the JSON object
	// by unmarshalling the object into a generic map with string keys and checking
	// that every required field exists as a key in the generic map.
	requiredProperties := []string{
		"expiration_time",
		"name",
		"role_id",
	}

	allProperties := make(map[string]interface{})

	err = json.Unmarshal(data, &allProperties)

	if err != nil {
		return err;
	}

	for _, requiredProperty := range(requiredProperties) {
		if _, exists := allProperties[requiredProperty]; !exists {
			return fmt.Errorf("no value given for required property %v", requiredProperty)
		}
	}

	varRoutesV2CreateAPIKeyRequest := _RoutesV2CreateAPIKeyRequest{}

	decoder := json.NewDecoder(bytes.NewReader(data))
	decoder.DisallowUnknownFields()
	err = decoder.Decode(&varRoutesV2CreateAPIKeyRequest)

	if err != nil {
		return err
	}

	*o = RoutesV2CreateAPIKeyRequest(varRoutesV2CreateAPIKeyRequest)

	return err
}

type NullableRoutesV2CreateAPIKeyRequest struct {
	value *RoutesV2CreateAPIKeyRequest
	isSet bool
}

func (v NullableRoutesV2CreateAPIKeyRequest) Get() *RoutesV2CreateAPIKeyRequest {
	return v.value
}

func (v *NullableRoutesV2CreateAPIKeyRequest) Set(val *RoutesV2CreateAPIKeyRequest) {
	v.value = val
	v.isSet = true
}

func (v NullableRoutesV2CreateAPIKeyRequest) IsSet() bool {
	return v.isSet
}

func (v *NullableRoutesV2CreateAPIKeyRequest) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRoutesV2CreateAPIKeyRequest(val *RoutesV2CreateAPIKeyRequest) *NullableRoutesV2CreateAPIKeyRequest {
	return &NullableRoutesV2CreateAPIKeyRequest{value: val, isSet: true}
}

func (v NullableRoutesV2CreateAPIKeyRequest) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRoutesV2CreateAPIKeyRequest) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


