/*
Monad Swagger API

This is the monad API

API version: 1.0
Contact: support@swagger.io
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package monad

import (
	"encoding/json"
)

// checks if the ResourceQuantity type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ResourceQuantity{}

// ResourceQuantity struct for ResourceQuantity
type ResourceQuantity struct {
	Format *string `json:"Format,omitempty"`
}

// NewResourceQuantity instantiates a new ResourceQuantity object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewResourceQuantity() *ResourceQuantity {
	this := ResourceQuantity{}
	return &this
}

// NewResourceQuantityWithDefaults instantiates a new ResourceQuantity object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewResourceQuantityWithDefaults() *ResourceQuantity {
	this := ResourceQuantity{}
	return &this
}

// GetFormat returns the Format field value if set, zero value otherwise.
func (o *ResourceQuantity) GetFormat() string {
	if o == nil || IsNil(o.Format) {
		var ret string
		return ret
	}
	return *o.Format
}

// GetFormatOk returns a tuple with the Format field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResourceQuantity) GetFormatOk() (*string, bool) {
	if o == nil || IsNil(o.Format) {
		return nil, false
	}
	return o.Format, true
}

// HasFormat returns a boolean if a field has been set.
func (o *ResourceQuantity) HasFormat() bool {
	if o != nil && !IsNil(o.Format) {
		return true
	}

	return false
}

// SetFormat gets a reference to the given string and assigns it to the Format field.
func (o *ResourceQuantity) SetFormat(v string) {
	o.Format = &v
}

func (o ResourceQuantity) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ResourceQuantity) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Format) {
		toSerialize["Format"] = o.Format
	}
	return toSerialize, nil
}

type NullableResourceQuantity struct {
	value *ResourceQuantity
	isSet bool
}

func (v NullableResourceQuantity) Get() *ResourceQuantity {
	return v.value
}

func (v *NullableResourceQuantity) Set(val *ResourceQuantity) {
	v.value = val
	v.isSet = true
}

func (v NullableResourceQuantity) IsSet() bool {
	return v.isSet
}

func (v *NullableResourceQuantity) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableResourceQuantity(val *ResourceQuantity) *NullableResourceQuantity {
	return &NullableResourceQuantity{value: val, isSet: true}
}

func (v NullableResourceQuantity) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableResourceQuantity) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


