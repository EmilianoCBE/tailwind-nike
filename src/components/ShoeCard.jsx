export const ShoeCard = ({ imgUrl, imageUrlThumbnail, changeBigShoeImage, bigShoeImage }) => {
  const handleClick = () => {
    if (bigShoeImage !== imgUrl) {
      changeBigShoeImage(imgUrl)
    }
  }

  return (
    <div className={`border-2 rounded-xl 
      ${bigShoeImage === imgUrl ? 'border-coral-red' : 'border-transparent'}
      cursor-pointer max-sm:flex-1 transition-all duration-300 hover:border-coral-red
    `}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img src={imageUrlThumbnail} alt="shoe-collection" width={127} height={103}
          className="object-contain"
        />
      </div>
    </div>
  )
}
