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

from monad.models.routes_v2_secret_response import RoutesV2SecretResponse

class TestRoutesV2SecretResponse(unittest.TestCase):
    """RoutesV2SecretResponse unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> RoutesV2SecretResponse:
        """Test RoutesV2SecretResponse
            include_optional is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `RoutesV2SecretResponse`
        """
        model = RoutesV2SecretResponse()
        if include_optional:
            return RoutesV2SecretResponse(
                created_at = '',
                description = '',
                id = '',
                name = '',
                organization_id = '',
                updated_at = ''
            )
        else:
            return RoutesV2SecretResponse(
        )
        """

    def testRoutesV2SecretResponse(self):
        """Test RoutesV2SecretResponse"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
