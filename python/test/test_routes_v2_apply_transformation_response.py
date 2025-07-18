# coding: utf-8

"""
    Monad Swagger API

    This is the monad API

    The version of the OpenAPI document: 1.0
    Contact: support@swagger.io
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest

from monad.models.routes_v2_apply_transformation_response import RoutesV2ApplyTransformationResponse

class TestRoutesV2ApplyTransformationResponse(unittest.TestCase):
    """RoutesV2ApplyTransformationResponse unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> RoutesV2ApplyTransformationResponse:
        """Test RoutesV2ApplyTransformationResponse
            include_optional is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `RoutesV2ApplyTransformationResponse`
        """
        model = RoutesV2ApplyTransformationResponse()
        if include_optional:
            return RoutesV2ApplyTransformationResponse(
                record = [
                    56
                    ]
            )
        else:
            return RoutesV2ApplyTransformationResponse(
        )
        """

    def testRoutesV2ApplyTransformationResponse(self):
        """Test RoutesV2ApplyTransformationResponse"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
