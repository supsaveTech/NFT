// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract AngryBunnies is ERC721Enumerable, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenId;

    uint256 public constant MAX_AGBN = 7777;
    uint256 public price = 60000000000000000; //0.06 Ether
    string baseTokenURI;
    bool public saleOpen = false;

    event AngryBunniesMinted(uint256 totalMinted);

    constructor(string memory baseURI) ERC721("Angry Bunnies", "AGBN") {
        setBaseURI(baseURI);
    }

    //Get token Ids of all tokens owned by _owner
    function walletOfOwner(address _owner)
        external
        view
        returns (uint256[] memory)
    {
        uint256 tokenCount = balanceOf(_owner);

        uint256[] memory tokensId = new uint256[](tokenCount);
        for (uint256 i = 0; i < tokenCount; i++) {
            tokensId[i] = tokenOfOwnerByIndex(_owner, i);
        }

        return tokensId;
    }

    function setBaseURI(string memory baseURI) public onlyOwner {
        baseTokenURI = baseURI;
    }

    function setPrice(uint256 _newPrice) public onlyOwner {
        price = _newPrice;
    }

    //Close sale if open, open sale if closed
    function flipSaleState() public onlyOwner {
        saleOpen = !saleOpen;
    }

    function withdrawAll() public onlyOwner {
        (bool success, ) = msg.sender.call{value: address(this).balance}("");
        require(success, "Transfer failed.");
    }

    //mint AngryBunnies
    function mintAngryBunnies(uint256 _count) public payable {
        if (msg.sender != owner()) {
            require(saleOpen, "Sale is not open yet");
        }
        require(
            _count > 0 && _count <= 20,
            "Min 1 & Max 20 AngryBunnies can be minted per transaction"
        );
        require(
            totalSupply() + _count <= MAX_AGBN,
            "Transaction will exceed maximum supply of AngryBunnies"
        );
        require(
            msg.value >= price * _count,
            "Ether sent with this transaction is not correct"
        );

        address _to = msg.sender;

        for (uint256 i = 0; i < _count; i++) {
            _mint(_to);
        }
    }

    function _mint(address _to) private {
        _tokenId.increment();
        uint256 tokenId = _tokenId.current();
        _safeMint(_to, tokenId);
        emit AngryBunniesMinted(tokenId);
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return baseTokenURI;
    }
}
