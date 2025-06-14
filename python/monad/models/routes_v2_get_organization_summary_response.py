# coding: utf-8

"""
    Monad API

    This is the monad API

    The version of the OpenAPI document: 1.0
    Contact: support@swagger.io
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


from __future__ import annotations
import pprint
import re  # noqa: F401
import json

from pydantic import BaseModel, ConfigDict, StrictStr
from typing import Any, ClassVar, Dict, List, Optional
from monad.models.routes_v2_organization_overview import RoutesV2OrganizationOverview
from monad.models.routes_v2_pipeline_status import RoutesV2PipelineStatus
from typing import Optional, Set
from typing_extensions import Self

class RoutesV2GetOrganizationSummaryResponse(BaseModel):
    """
    RoutesV2GetOrganizationSummaryResponse
    """ # noqa: E501
    organization_id: StrictStr
    pipelines: Optional[List[RoutesV2PipelineStatus]] = None
    summary: Optional[RoutesV2OrganizationOverview] = None
    __properties: ClassVar[List[str]] = ["organization_id", "pipelines", "summary"]

    model_config = ConfigDict(
        populate_by_name=True,
        validate_assignment=True,
        protected_namespaces=(),
    )


    def to_str(self) -> str:
        """Returns the string representation of the model using alias"""
        return pprint.pformat(self.model_dump(by_alias=True))

    def to_json(self) -> str:
        """Returns the JSON representation of the model using alias"""
        # TODO: pydantic v2: use .model_dump_json(by_alias=True, exclude_unset=True) instead
        return json.dumps(self.to_dict())

    @classmethod
    def from_json(cls, json_str: str) -> Optional[Self]:
        """Create an instance of RoutesV2GetOrganizationSummaryResponse from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self) -> Dict[str, Any]:
        """Return the dictionary representation of the model using alias.

        This has the following differences from calling pydantic's
        `self.model_dump(by_alias=True)`:

        * `None` is only added to the output dict for nullable fields that
          were set at model initialization. Other fields with value `None`
          are ignored.
        """
        excluded_fields: Set[str] = set([
        ])

        _dict = self.model_dump(
            by_alias=True,
            exclude=excluded_fields,
            exclude_none=True,
        )
        # override the default output from pydantic by calling `to_dict()` of each item in pipelines (list)
        _items = []
        if self.pipelines:
            for _item_pipelines in self.pipelines:
                if _item_pipelines:
                    _items.append(_item_pipelines.to_dict())
            _dict['pipelines'] = _items
        # override the default output from pydantic by calling `to_dict()` of summary
        if self.summary:
            _dict['summary'] = self.summary.to_dict()
        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of RoutesV2GetOrganizationSummaryResponse from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "organization_id": obj.get("organization_id"),
            "pipelines": [RoutesV2PipelineStatus.from_dict(_item) for _item in obj["pipelines"]] if obj.get("pipelines") is not None else None,
            "summary": RoutesV2OrganizationOverview.from_dict(obj["summary"]) if obj.get("summary") is not None else None
        })
        return _obj


